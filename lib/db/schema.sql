-- Fiesta Bowl 2026 Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Affiliate Clicks Tracking Table
CREATE TABLE IF NOT EXISTS affiliate_clicks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    source VARCHAR(255),
    user_agent TEXT,
    referrer TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_affiliate_clicks_slug ON affiliate_clicks(slug);
CREATE INDEX idx_affiliate_clicks_created_at ON affiliate_clicks(created_at);
CREATE INDEX idx_affiliate_clicks_category ON affiliate_clicks(category);

-- Page Views Tracking Table
CREATE TABLE IF NOT EXISTS page_views (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_url TEXT NOT NULL,
    user_agent TEXT,
    referrer TEXT,
    session_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_page_views_created_at ON page_views(created_at);
CREATE INDEX idx_page_views_session_id ON page_views(session_id);

-- Ticket Prices Table
CREATE TABLE IF NOT EXISTS ticket_prices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    platform VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    availability VARCHAR(50),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_ticket_prices_platform ON ticket_prices(platform);
CREATE INDEX idx_ticket_prices_updated_at ON ticket_prices(updated_at);

-- Game Statistics Table
CREATE TABLE IF NOT EXISTS game_stats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    stat_type VARCHAR(100) NOT NULL,
    stat_value TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_game_stats_stat_type ON game_stats(stat_type);
CREATE INDEX idx_game_stats_updated_at ON game_stats(updated_at);

-- Enable Row Level Security (RLS)
ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE ticket_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_stats ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (for stats dashboard)
CREATE POLICY "Allow public read access" ON affiliate_clicks FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON page_views FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON ticket_prices FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON game_stats FOR SELECT USING (true);

-- Create policies for insert (only from authenticated service)
-- Note: In production, you should use service role key for inserts
CREATE POLICY "Allow insert for service role" ON affiliate_clicks FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for service role" ON page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for service role" ON ticket_prices FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert for service role" ON game_stats FOR INSERT WITH CHECK (true);

-- Create a view for click statistics
CREATE OR REPLACE VIEW affiliate_click_stats AS
SELECT 
    slug,
    category,
    COUNT(*) as total_clicks,
    COUNT(DISTINCT DATE(created_at)) as days_active,
    MAX(created_at) as last_click,
    MIN(created_at) as first_click
FROM affiliate_clicks
GROUP BY slug, category
ORDER BY total_clicks DESC;

-- Create a view for daily click trends
CREATE OR REPLACE VIEW daily_click_trends AS
SELECT 
    DATE(created_at) as date,
    category,
    COUNT(*) as clicks
FROM affiliate_clicks
GROUP BY DATE(created_at), category
ORDER BY date DESC, clicks DESC;

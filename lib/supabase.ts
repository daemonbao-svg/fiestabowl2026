import { createClient } from '@supabase/supabase-js'

// Supabase client configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create a lazy supabase client for interacting with your database
let supabaseInstance: any = null

export const getSupabase = () => {
    if (supabaseInstance) return supabaseInstance

    if (!supabaseUrl) {
        throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined')
    }
    if (!supabaseAnonKey) {
        throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined')
    }

    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
    return supabaseInstance
}

// Server-side client with service role key (for admin operations)
export const getSupabaseAdmin = () => {
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!supabaseUrl) {
        throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined')
    }
    if (!serviceRoleKey) {
        throw new Error('SUPABASE_SERVICE_ROLE_KEY is not defined')
    }
    return createClient(supabaseUrl, serviceRoleKey)
}

// Type definitions for database tables
export interface AffiliateClick {
    id?: string
    slug: string
    category: string
    source?: string
    user_agent?: string
    referrer?: string
    ip_address?: string
    created_at?: string
}

export interface PageView {
    id?: string
    page_url: string
    user_agent?: string
    referrer?: string
    session_id?: string
    created_at?: string
}

export interface TicketPrice {
    id?: string
    platform: string
    price: number
    currency: string
    availability: string
    updated_at?: string
}

export interface GameStat {
    id?: string
    stat_type: string
    stat_value: string
    updated_at?: string
}

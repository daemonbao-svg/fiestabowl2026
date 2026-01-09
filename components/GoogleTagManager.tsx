'use client'

import Script from 'next/script'

interface GoogleTagManagerProps {
    gtmId: string
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
    // Falls back to the ID provided in the prompt if env is not set
    const activeId = gtmId || 'GTM-KT26GZW5'

    return (
        <>
            {/* Google Tag Manager Script - Using beforeInteractive to ensure it is in the head */}
            <Script
                id="gtm-script"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${activeId}');
          `,
                }}
            />

            {/* Google Tag Manager NoScript - Must be in body */}
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${activeId}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
        </>
    )
}

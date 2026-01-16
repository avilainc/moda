import type { Metadata } from 'next'
import { Inter, Playfair_Display, Roboto_Mono } from 'next/font/google'
import Script from 'next/script'
import { FacebookPixel } from '@/components/FacebookPixel'
import { FB_PIXEL_ID } from '@/lib/fpixel'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Easy4me Moda | Gestão que veste sua loja pra crescer de verdade',
  description: 'Controle estoque, vendas, notas e financeiro sem ficar preso no papel ou Excel. Sistema especializado para moda varejista.',
  keywords: ['gestão moda', 'sistema loja roupas', 'controle estoque', 'PDV moda', 'NFC-e', 'Easy4me'],
  authors: [{ name: 'GRD Company' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://easy4me.com.br',
    siteName: 'Easy4me Moda',
    title: 'Easy4me Moda | Sistema de Gestão para Lojas de Roupas',
    description: 'Sistema completo de gestão para lojas de moda. Controle estoque, vendas e financeiro em um só lugar.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Easy4me Moda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy4me Moda | Gestão para Lojas de Roupas',
    description: 'Sistema completo de gestão para lojas de moda.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${robotoMono.variable}`}>
      <head>
        {/* Meta Pixel Code */}
        {FB_PIXEL_ID && (
          <>
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${FB_PIXEL_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans">
        {FB_PIXEL_ID && <FacebookPixel />}
        {children}
      </body>
    </html>
  )
}

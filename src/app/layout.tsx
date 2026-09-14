import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EDGAR_GALVAN | Full-Stack Developer Portfolio',
  description:
    'Full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building digital experiences with cutting-edge technology.',
  keywords: [
    'developer',
    'portfolio',
    'full-stack',
    'front-end',
    'react',
    'next.js',
    'typescript',
    'web development',
  ],
  authors: [{ name: 'EDGAR_GALVAN' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'EDGAR_GALVAN | Full-Stack Developer Portfolio',
    description:
      'Full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'EDGAR_GALVAN Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDGAR_GALVAN | Full-Stack Developer Portfolio',
    description:
      'Full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} font-sans antialiased`}
      >
        {/* Skip to Content Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Scanlines Overlay */}
        <div className="scanlines" aria-hidden="true" />

        {/* Noise Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Main Content */}
        <main id="main-content">{children}</main>

        {/* SVG Filters for Chromatic Aberration */}
        <svg className="hidden" aria-hidden="true">
          <defs>
            <filter id="cyan-channel">
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 1 0"
              />
            </filter>
            <filter id="red-channel">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}

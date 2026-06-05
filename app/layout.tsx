import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/content';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const ogImage = `${site.url}/assets/images/opengraph-new.png`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [...site.keywords],
  alternates: { canonical: site.url },
  robots: { index: true, follow: true, 'max-image-preview': 'large' } as Metadata['robots'],
  icons: {
    icon: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
    locale: 'en_IN',
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        type: 'image/png',
        width: 1173,
        height: 655,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: [{ url: ogImage, alt: site.name }],
  },
};

export const viewport = {
  themeColor: '#0E2340',
};

const base = site.url.replace(/\/$/, '');
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${base}/#organization`,
      name: site.brand,
      legalName: site.name,
      url: `${base}/`,
      logo: `${base}/assets/images/logo.png`,
      image: ogImage,
      description: site.description,
      email: site.email,
      foundingDate: '2022',
      founder: {
        '@type': 'Person',
        name: 'Ajay Handa',
        jobTitle: 'Founder & Managing Director',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Amrit Building, 2nd Cross, Hosur',
        addressLocality: 'Dharwad',
        addressRegion: 'Karnataka',
        postalCode: '580021',
        addressCountry: 'IN',
      },
      identifier: {
        '@type': 'PropertyValue',
        name: 'CIN',
        value: site.cin,
      },
      sameAs: [site.platform],
    },
    {
      '@type': 'WebSite',
      '@id': `${base}/#website`,
      url: `${base}/`,
      name: site.name,
      description: site.description,
      keywords: site.keywords.join(', '),
      inLanguage: 'en-IN',
      publisher: { '@id': `${base}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.bloomandco.co.ke"),
  title: {
    default: "Bloom & Co | Wellness & Productivity Journals — Nairobi, Kenya",
    template: "%s | Bloom & Co",
  },
  description:
    "Bloom & Co creates intentional wellness journals, productivity guides, and corporate wellness solutions for individuals and organizations across Africa. Shop our collection of guided journals, devotional workbooks, and kids coloring books.",
  keywords: [
    "wellness journals Kenya",
    "productivity journals Nairobi",
    "corporate wellness Kenya",
    "guided journals Africa",
    "Bloom and Co",
    "Flow With Your Cycle",
    "Corporate Wellness Journal",
    "devotional workbook Kenya",
    "kids coloring books Kenya",
    "intentional living Africa",
    "mental wellness Kenya",
    "employee wellness programs Kenya",
    "Fridah Makena",
    "wellness gifts Kenya",
  ],
  authors: [{ name: "Fridah Nairuti", url: "https://www.bloomandco.co.ke" }],
  creator: "Bloom & Co",
  publisher: "Bloom & Co",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.bloomandco.co.ke",
    siteName: "Bloom & Co",
    title: "Bloom & Co | Wellness & Productivity Journals — Nairobi, Kenya",
    description:
      "Intentional wellness tools for individuals and organizations across Africa. Journals, guides, devotionals, and kids coloring books designed with purpose.",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Bloom & Co — Where Wellness Meets Purpose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom & Co | Wellness Journals & Productivity Guides",
    description:
      "Intentional wellness tools for individuals and organizations across Africa.",
    images: ["/OG.png"],
    creator: "@bloomco_ke",
  },
  alternates: {
    canonical: "https://www.bloomandco.co.ke",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add your Google Search Console verification code here after setup
    // google: "your-verification-code",
  },
};

// Structured data for Google rich results
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bloomandco.co.ke/#organization",
      name: "Bloom & Co",
      url: "https://www.bloomandco.co.ke",
      logo: {
        "@type": "ImageObject",
        url: "https://www.bloomandco.co.ke/logo.png",
      },
      description:
        "Bloom & Co creates intentional wellness and productivity tools that help individuals and organizations cultivate healthier, more balanced lives across Africa.",
      foundingLocation: "Nairobi, Kenya",
      founder: {
        "@type": "Person",
        name: "Fridah Nairuti",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+254-724-973-277",
        email: "bloomandco@gmail.com",
        contactType: "customer service",
        areaServed: "Africa",
      },
      sameAs: [
        "https://www.instagram.com/bloomco.ke",
        "https://selar.com/m/fridah-makena993077",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bloomandco.co.ke/#website",
      url: "https://www.bloomandco.co.ke",
      name: "Bloom & Co",
      publisher: { "@id": "https://www.bloomandco.co.ke/#organization" },
    },
    {
      "@type": "ItemList",
      name: "Bloom & Co Products",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Corporate Wellness Journal — A 30-Day Practice in Mindful Performance",
          url: "https://selar.com/m/fridah-makena993077",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Flow With Your Cycle — A Woman's Guide to Aligning Energy and Work",
          url: "https://selar.com/m/fridah-makena993077",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Well-being and Productivity at the Workplace: A Guide",
          url: "https://selar.com/m/fridah-makena993077",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Daily Devotional Workbook — Mother's Day Edition",
          url: "https://selar.com/m/fridah-makena993077",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* WhatsApp / social preview */}
        <meta property="og:whatsapp:title" content="Bloom & Co — Wellness Journals & Guides" />
        {/* Kenya / Africa geo targeting */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

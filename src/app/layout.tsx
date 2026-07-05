import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/motion-provider";
import Analytics from "@/components/analytics";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const siteUrl = "https://goutham0110.github.io/portfolio";
const siteTitle = "Goutham's Portfolio";
const siteDescription =
  "Full-stack engineer building distributed systems, data pipelines, and polished web apps with React, Next.js, Node.js, Python, and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Goutham",
    "full-stack engineer",
    "software engineer",
    "Chennai",
    "React",
    "Next.js",
    "Node.js",
    "distributed systems",
    "system design",
    "portfolio",
  ],
  authors: [{ name: "Goutham S", url: siteUrl }],
  creator: "Goutham S",
  alternates: {
    canonical: siteUrl,
    types: { "application/rss+xml": `${siteUrl}/feed.xml` },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Goutham S Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Goutham-portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: { index: true, follow: true },
  // Paste the token from Google Search Console (Settings > Ownership verification
  // > HTML tag) into the empty string below, then redeploy. Leaving it empty
  // omits the tag entirely, so it is safe to ship as-is.
  verification: {
    google: "10du9kFaUorfUAUs6-TMsbdkAO2dbyepFeDdooJEACo",
  },
};

export const viewport: Viewport = {
  themeColor: "#080807",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteTitle,
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en",
  author: { "@type": "Person", name: "Goutham S", url: siteUrl },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Goutham S",
  jobTitle: "Software Development Engineer",
  url: siteUrl,
  sameAs: [
    "https://github.com/Goutham0110",
    "https://www.linkedin.com/in/goutham0110/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Rapid Acceleration Partners",
  },
  knowsAbout: [
    "Full-Stack Development",
    "Distributed Systems",
    "System Design",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>
          {children}
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}

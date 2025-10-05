import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://todaywegrind.com"),
  title: {
    default: "Today We Grind | Coding, Coffee & Developer Lifestyle",
    template: "%s | Today We Grind",
  },
  description:
    "Today We Grind is the ultimate destination for coding enthusiasts, coffee lovers, and developers embracing the modern lifestyle. Join Kiet Nguyen's journey of coding, coffee culture, and developer insights. Discover todaywegrindcoding tips, todaywegrindcoffee moments, and authentic developer lifestyle content.",
  keywords: [
    "today we grind",
    "todaywegrind",
    "todaywegrindcoding",
    "todaywegrindcoffee",
    "coding",
    "coffee",
    "developer lifestyle",
    "developer blog",
    "kiet nguyen",
    "software engineering",
    "web development",
    "programming",
    "tech lifestyle",
    "coffee coding",
    "developer culture",
    "coding tips",
    "coffee culture",
    "tech blog",
    "javascript",
    "node.js",
    "react",
    "career development",
    "learning to code",
    "remote work",
    "developer productivity",
    "coding community",
    "tech career",
    "programming lifestyle",
    "software developer",
    "web developer",
    "full stack developer",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Kiet Nguyen", url: "https://todaywegrind.com" }],
  creator: "Kiet Nguyen",
  publisher: "Kiet Nguyen",
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
    locale: "en_US",
    url: "https://todaywegrind.com",
    siteName: "Today We Grind | Coding, Coffee & Developer Lifestyle",
    title: "Today We Grind | Coding, Coffee & Developer Lifestyle",
    description:
      "Today We Grind is the ultimate destination for coding enthusiasts, coffee lovers, and developers embracing the modern lifestyle. Join Kiet Nguyen's journey of coding, coffee culture, and developer insights.",
    images: [
      {
        url: "/kiet-profile-1.png",
        width: 1200,
        height: 630,
        alt: "Today We Grind - Coding, Coffee & Developer Lifestyle with Kiet Nguyen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Today We Grind | Coding, Coffee & Developer Lifestyle",
    description:
      "Today We Grind is the ultimate destination for coding enthusiasts, coffee lovers, and developers embracing the modern lifestyle. Join Kiet Nguyen's journey of coding, coffee culture, and developer insights.",
    images: ["/kiet-profile-1.png"],
    creator: "@todaywegrind",
    site: "@todaywegrind",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
  alternates: {
    canonical: "https://todaywegrind.com",
  },
  category: "technology",
  classification: "developer blog",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/terminal-solid-full.svg", type: "image/svg+xml" },
      { url: "/terminal-solid-full.svg", sizes: "any" },
    ],
    shortcut: "/terminal-solid-full.svg",
    apple: "/terminal-solid-full.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/terminal-solid-full.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/terminal-solid-full.svg" />
        <link rel="apple-touch-icon" href="/terminal-solid-full.svg" />
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/terminal-solid-full.svg"
          as="image"
          type="image/svg+xml"
        />
        <link rel="preload" href="/kiet-profile-1.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "Blog"],
              name: "Kiet Nguyen",
              alternateName: "Today We Grind",
              url: "https://todaywegrind.com",
              jobTitle: "Software Engineer",
              description:
                "Today We Grind is the ultimate destination for coding enthusiasts, coffee lovers, and developers embracing the modern lifestyle. Join Kiet Nguyen's journey of coding, coffee culture, and developer insights.",
              worksFor: {
                "@type": "Organization",
                name: "Thoughtworks",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ho Chi Minh City",
                addressCountry: "Vietnam",
              },
              sameAs: [
                "https://linkedin.com/in/kiet-nguyen-tuan",
                "https://github.com/iamkiet",
              ],
              knowsAbout: [
                "Software Engineering",
                "Microservices",
                "Kotlin",
                "React",
                "Next.js",
                "Web Development",
                "Cloud Architecture",
                "Coding",
                "Coffee Culture",
                "Developer Lifestyle",
                "Programming",
                "Tech Career",
              ],
              mainEntityOfPage: {
                "@type": "WebSite",
                "@id": "https://todaywegrind.com",
                name: "Today We Grind",
                description:
                  "Today We Grind | Coding, Coffee & Developer Lifestyle",
                url: "https://todaywegrind.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://todaywegrind.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              publisher: {
                "@type": "Organization",
                name: "Today We Grind",
                url: "https://todaywegrind.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

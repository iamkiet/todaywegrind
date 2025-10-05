import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Kiet Nguyen - Senior Software Engineer | Today We Grind",
  description:
    "Download Kiet Nguyen's resume - Senior Software Engineer with 8+ years experience in microservices, Kotlin, React, and cloud architecture. Technical Anchor at Thoughtworks.",
  keywords: [
    "kiet nguyen resume",
    "software engineer resume",
    "senior software engineer",
    "microservices expert",
    "kotlin developer",
    "react developer",
    "thoughtworks",
    "technical architect",
    "cloud architecture",
    "developer resume",
    "tech career",
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
    title: "Resume | Kiet Nguyen - Senior Software Engineer | Today We Grind",
    description:
      "Download Kiet Nguyen's resume - Senior Software Engineer with 8+ years experience in microservices, Kotlin, React, and cloud architecture.",
    url: "https://todaywegrind.com/resume",
    type: "profile",
    images: [
      {
        url: "/kiet-profile-2.png",
        width: 1200,
        height: 630,
        alt: "Kiet Nguyen - Senior Software Engineer Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Kiet Nguyen - Senior Software Engineer | Today We Grind",
    description:
      "Download Kiet Nguyen's resume - Senior Software Engineer with 8+ years experience in microservices, Kotlin, React, and cloud architecture.",
    images: ["/kiet-profile-2.png"],
  },
  alternates: {
    canonical: "https://todaywegrind.com/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

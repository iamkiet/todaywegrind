import { Metadata } from "next";

export const metadata: Metadata = {
  title: "🏛️ Tính Bảo Hiểm Xã Hội Một Lần | Social Insurance Calculator",
  description: "Tính toán mức hưởng bảo hiểm xã hội một lần theo quy định hiện hành. Công cụ tính BHXH một lần chính xác và miễn phí.",
  keywords: [
    "tính bảo hiểm xã hội một lần",
    "social insurance calculator",
    "BHXH một lần",
    "tính BHXH",
    "bảo hiểm xã hội",
    "công thức tính BHXH",
    "mức hưởng BHXH",
    "tính toán BHXH",
    "quy định BHXH",
    "công cụ tính BHXH"
  ],
  openGraph: {
    title: "🏛️ Tính Bảo Hiểm Xã Hội Một Lần | Social Insurance Calculator",
    description: "Tính toán mức hưởng bảo hiểm xã hội một lần theo quy định hiện hành. Công cụ tính BHXH một lần chính xác và miễn phí.",
    url: "https://todaywegrind.com/social-insurance",
    images: ["/kiet-profile-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "🏛️ Tính Bảo Hiểm Xã Hội Một Lần | Social Insurance Calculator",
    description: "Tính toán mức hưởng bảo hiểm xã hội một lần theo quy định hiện hành.",
    images: ["/kiet-profile-1.png"],
  },
};

export default function SocialInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

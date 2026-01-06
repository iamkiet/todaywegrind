import { Metadata } from "next";

export const metadata: Metadata = {
  title: "💰 Tính Giá Vàng Sang Lượng | Gold Calculator",
  description: "Tính giá vàng quốc tế (ounce) sang giá vàng Việt Nam (lượng) theo tỷ giá hiện tại. Máy tính chuyển đổi giá vàng trực tuyến miễn phí.",
  keywords: [
    "tính giá vàng",
    "gold calculator",
    "giá vàng ounce",
    "giá vàng lượng",
    "chuyển đổi giá vàng",
    "gold price converter",
    "vàng quốc tế",
    "vàng việt nam",
    "tỷ giá vàng",
    "máy tính vàng"
  ],
  openGraph: {
    title: "💰 Tính Giá Vàng Sang Lượng | Gold Calculator",
    description: "Tính giá vàng quốc tế (ounce) sang giá vàng Việt Nam (lượng) theo tỷ giá hiện tại. Máy tính chuyển đổi giá vàng trực tuyến miễn phí.",
    url: "https://todaywegrind.com/gold",
    images: ["/kiet-profile-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "💰 Tính Giá Vàng Sang Lượng | Gold Calculator",
    description: "Tính giá vàng quốc tế (ounce) sang giá vàng Việt Nam (lượng) theo tỷ giá hiện tại.",
    images: ["/kiet-profile-1.png"],
  },
};

export default function GoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

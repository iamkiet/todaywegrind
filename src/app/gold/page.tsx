"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

interface GoldPrice {
  price: number;
  currency: string;
  timestamp: number;
  source?: string;
  success?: boolean;
  message?: string;
}

export default function GoldPage() {
  const [goldPrice, setGoldPrice] = useState<GoldPrice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [customGoldPrice, setCustomGoldPrice] = useState<string>("");
  const [customResult, setCustomResult] = useState<{usd: number | null, vnd: number | null}>({usd: null, vnd: null});

  // Fetch gold price from our API route
  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        setLoading(true);
        // Using our internal API route that handles multiple sources
        const response = await fetch('/api/gold-price');
        
        if (!response.ok) {
          throw new Error("Failed to fetch gold price");
        }
        
        const data = await response.json();
        
        setGoldPrice({
          price: data.price,
          currency: data.currency,
          timestamp: data.timestamp,
          source: data.source,
          success: data.success,
          message: data.message,
        });

        // Clear error if we got any price data
        setError(null);
        
      } catch (err) {
        console.error("Error fetching gold price:", err);
        setError("Không thể tải giá vàng từ các nguồn API. Sử dụng giá mẫu.");
        // Fallback price for demo purposes
        setGoldPrice({
          price: 2025, // USD per ounce
          currency: "USD",
          timestamp: Date.now(),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGoldPrice();
  }, []);

  const handleCustomGoldPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomGoldPrice(value);
    
    if (value === "") {
      setCustomResult({usd: null, vnd: null});
      return;
    }
    
    const price = parseFloat(value);
    if (!isNaN(price) && price > 0) {
      // Calculate price per luong in USD
      const pricePerLuongUSD = price * (37.5 / 31.1034768);
      // Calculate price per luong in VND
      const pricePerLuongVND = pricePerLuongUSD * 25000;
      
      setCustomResult({
        usd: pricePerLuongUSD,
        vnd: pricePerLuongVND
      });
    } else {
      setCustomResult({usd: null, vnd: null});
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const formatUSD = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8">
        <Navigation />
        <main>
          <section className="mb-28" aria-labelledby="gold-calculator-heading">
            <div className="text-left">
              <h1
                id="gold-calculator-heading"
                className="text-2xl font-medium mb-6 tracking-wider"
              >
                💰 Tính Giá Vàng Sang Lượng
              </h1>
              <p className="text-gray-700 mb-8 font-light">
                Tính giá vàng quốc tế (ounce) sang giá vàng Việt Nam (lượng) theo tỷ giá hiện tại
              </p>

              {/* Current Gold Price Display */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-lg font-medium mb-4">Giá Vàng Quốc Tế Hiện Tại</h2>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                    <span className="text-gray-600">Đang tải giá vàng từ các nguồn API...</span>
                  </div>
                ) : goldPrice ? (
                  <div>
                    <p className="text-2xl font-bold text-gray-800">
                      {formatUSD(goldPrice.price)}/ounce
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Nguồn: {goldPrice.source || 'Multiple APIs'}
                      {goldPrice.source === 'fallback' ? (
                        <span className="text-orange-600 ml-2">⚠️</span>
                      ) : (
                        <span className="text-green-600 ml-2">✓</span>
                      )}
                    </p>
                    <p className="text-sm text-gray-500">
                      Cập nhật lúc: {new Date(goldPrice.timestamp).toLocaleString("vi-VN")}
                    </p>
                    {goldPrice.source === 'fallback' && (
                      <div className="mt-2 p-2 bg-orange-50 border border-orange-200 rounded text-sm text-orange-700">
                        ⚠️ {goldPrice.message || "Sử dụng giá mẫu do API không khả dụng"}
                      </div>
                    )}
                  </div>
                ) : error ? (
                  <div className="text-red-600">
                    <p>{error}</p>
                    <p className="text-sm mt-2 text-gray-500">
                      Không thể tải giá vàng. Vui lòng thử lại sau.
                    </p>
                  </div>
                ) : null}
              </div>

              {/* Calculator Form */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Máy Tính Chuyển Đổi</h3>
                
                <div className="space-y-6">
                  {/* Custom Gold Price Calculator */}
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-md font-medium mb-3 text-gray-800">Nhập Giá Vàng Thế Giới</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="customGoldPrice" className="block text-sm font-medium text-gray-700 mb-2">
                          Giá vàng thế giới (USD/ounce):
                        </label>
                        <input
                          type="number"
                          id="customGoldPrice"
                          value={customGoldPrice}
                          onChange={handleCustomGoldPriceChange}
                          placeholder="Nhập giá vàng USD/ounce..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          step="0.01"
                          min="0"
                        />
                      </div>

                      {customResult.usd !== null && customResult.vnd !== null && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-medium text-blue-800 mb-3">Giá 1 lượng vàng:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded border">
                              <p className="text-sm text-gray-600 mb-1">USD</p>
                              <p className="text-lg font-bold text-blue-700">
                                {formatUSD(customResult.usd)}
                              </p>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <p className="text-sm text-gray-600 mb-1">VND</p>
                              <p className="text-lg font-bold text-blue-700">
                                {formatCurrency(customResult.vnd)}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Conversion Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Công Thức Chuyển Đổi:</h4>
                  <div className="text-sm text-blue-700 space-y-2">
                    <p><strong>Công thức:</strong> Giá vàng USD/oz × (37.5 ÷ 31.1034768) × 25,000 VND × số ounce</p>
                    <p><strong>Ví dụ:</strong> 2,716.9 USD/oz → 2,716.9 × (37.5 ÷ 31.1034768) ≈ 3,275.6 USD/lượng</p>
                    <p><strong>Với giá hiện tại:</strong> {goldPrice ? `${formatUSD(goldPrice.price)}/oz → ${formatCurrency(goldPrice.price * (37.5 / 31.1034768) * 25000)}/lượng` : 'Đang tải...'}</p>
                    <ul className="space-y-1">
                      <li>• <strong>1 ounce</strong> = 37.5 ÷ 31.1034768 = 1.20565... lượng (chính xác)</li>
                      <li>• <strong>Tỷ giá USD/VND</strong>: 25,000 VND</li>
                      <li>• <strong>Nguồn dữ liệu</strong>: Multiple APIs với fallback</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Liên Kết Nhanh</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/"
                    className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                  >
                    ← Trang chủ
                  </Link>
                  <Link
                    href="/about"
                    className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                  >
                    Giới thiệu
                  </Link>
                  <Link
                    href="/blog"
                    className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

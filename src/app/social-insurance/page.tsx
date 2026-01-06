"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function SocialInsurancePage() {
  const [formData, setFormData] = useState({
    yearsBefore2014: "",
    yearsAfter2014: "",
    averageSalary: "",
  });
  
  const [result, setResult] = useState<{
    totalAmount: number;
    breakdown: {
      before2014: number;
      after2014: number;
    };
  } | null>(null);

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.yearsBefore2014 && !formData.yearsAfter2014) {
      newErrors.yearsBefore2014 = "Vui lòng nhập ít nhất một trong hai thời gian";
    }
    
    if (formData.yearsBefore2014 && (isNaN(Number(formData.yearsBefore2014)) || Number(formData.yearsBefore2014) < 0)) {
      newErrors.yearsBefore2014 = "Số năm phải là số dương";
    }
    
    if (formData.yearsAfter2014 && (isNaN(Number(formData.yearsAfter2014)) || Number(formData.yearsAfter2014) < 0)) {
      newErrors.yearsAfter2014 = "Số năm phải là số dương";
    }
    
    if (!formData.averageSalary || isNaN(Number(formData.averageSalary)) || Number(formData.averageSalary) <= 0) {
      newErrors.averageSalary = "Mức lương trung bình phải là số dương";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateSocialInsurance = () => {
    if (!validateForm()) return;
    
    const yearsBefore2014 = Number(formData.yearsBefore2014) || 0;
    const yearsAfter2014 = Number(formData.yearsAfter2014) || 0;
    const averageSalary = Number(formData.averageSalary);
    
    // Công thức tính BHXH một lần
    // Trước 2014: 1.5 tháng lương/năm
    // Từ 2014: 2 tháng lương/năm
    const before2014Amount = yearsBefore2014 * 1.5 * averageSalary;
    const after2014Amount = yearsAfter2014 * 2 * averageSalary;
    const totalAmount = before2014Amount + after2014Amount;
    
    setResult({
      totalAmount,
      breakdown: {
        before2014: before2014Amount,
        after2014: after2014Amount
      }
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const resetForm = () => {
    setFormData({
      yearsBefore2014: "",
      yearsAfter2014: "",
      averageSalary: "",
    });
    setResult(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8">
        <Navigation />
        <main>
          <section className="mb-28" aria-labelledby="social-insurance-heading">
            <div className="text-left">
              <h1
                id="social-insurance-heading"
                className="text-2xl font-medium mb-6 tracking-wider"
              >
                🏛️ Tính Bảo Hiểm Xã Hội Một Lần
              </h1>
              <p className="text-gray-700 mb-8 font-light">
                Tính toán mức hưởng bảo hiểm xã hội một lần theo quy định hiện hành
              </p>

              {/* Calculator Form */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-medium mb-6">Thông Tin Tính Toán</h3>
                
                <div className="space-y-6">
                  {/* Years Before 2014 */}
                  <div>
                    <label htmlFor="yearsBefore2014" className="block text-sm font-medium text-gray-700 mb-2">
                      Số năm đóng BHXH trước năm 2014:
                    </label>
                    <input
                      type="number"
                      id="yearsBefore2014"
                      name="yearsBefore2014"
                      value={formData.yearsBefore2014}
                      onChange={handleInputChange}
                      placeholder="Nhập số năm (ví dụ: 5)"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.yearsBefore2014 ? 'border-red-500' : 'border-gray-300'
                      }`}
                      step="0.1"
                      min="0"
                    />
                    {errors.yearsBefore2014 && (
                      <p className="text-red-500 text-sm mt-1">{errors.yearsBefore2014}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Mức hưởng: 1.5 tháng lương/năm
                    </p>
                  </div>

                  {/* Years After 2014 */}
                  <div>
                    <label htmlFor="yearsAfter2014" className="block text-sm font-medium text-gray-700 mb-2">
                      Số năm đóng BHXH từ năm 2014 trở đi:
                    </label>
                    <input
                      type="number"
                      id="yearsAfter2014"
                      name="yearsAfter2014"
                      value={formData.yearsAfter2014}
                      onChange={handleInputChange}
                      placeholder="Nhập số năm (ví dụ: 8)"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.yearsAfter2014 ? 'border-red-500' : 'border-gray-300'
                      }`}
                      step="0.1"
                      min="0"
                    />
                    {errors.yearsAfter2014 && (
                      <p className="text-red-500 text-sm mt-1">{errors.yearsAfter2014}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Mức hưởng: 2 tháng lương/năm
                    </p>
                  </div>

                  {/* Average Salary */}
                  <div>
                    <label htmlFor="averageSalary" className="block text-sm font-medium text-gray-700 mb-2">
                      Mức lương trung bình (VND):
                    </label>
                    <input
                      type="number"
                      id="averageSalary"
                      name="averageSalary"
                      value={formData.averageSalary}
                      onChange={handleInputChange}
                      placeholder="Nhập mức lương trung bình (ví dụ: 10000000)"
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.averageSalary ? 'border-red-500' : 'border-gray-300'
                      }`}
                      min="0"
                    />
                    {errors.averageSalary && (
                      <p className="text-red-500 text-sm mt-1">{errors.averageSalary}</p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={calculateSocialInsurance}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Tính Toán
                    </button>
                    <button
                      onClick={resetForm}
                      className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Làm Lại
                    </button>
                  </div>
                </div>
              </div>

              {/* Result Display */}
              {result && (
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-medium text-green-800 mb-4">Kết Quả Tính Toán</h3>
                  
                  <div className="space-y-4">
                    {/* Total Amount */}
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-medium text-gray-800 mb-2">Tổng số tiền BHXH một lần:</h4>
                      <p className="text-2xl font-bold text-green-700">
                        {formatCurrency(result.totalAmount)}
                      </p>
                    </div>

                    {/* Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {result.breakdown.before2014 > 0 && (
                        <div className="bg-white p-4 rounded border">
                          <h5 className="font-medium text-gray-700 mb-1">Trước năm 2014:</h5>
                          <p className="text-lg font-semibold text-blue-600">
                            {formatCurrency(result.breakdown.before2014)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formData.yearsBefore2014} năm × 1.5 tháng × {formatCurrency(Number(formData.averageSalary))}
                          </p>
                        </div>
                      )}
                      
                      {result.breakdown.after2014 > 0 && (
                        <div className="bg-white p-4 rounded border">
                          <h5 className="font-medium text-gray-700 mb-1">Từ năm 2014:</h5>
                          <p className="text-lg font-semibold text-blue-600">
                            {formatCurrency(result.breakdown.after2014)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formData.yearsAfter2014} năm × 2 tháng × {formatCurrency(Number(formData.averageSalary))}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Information Section */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-medium text-blue-800 mb-4">Thông Tin Quan Trọng:</h4>
                <div className="text-sm text-blue-700 space-y-2">
                  <ul className="space-y-1">
                    <li>• <strong>Trước năm 2014:</strong> 1.5 tháng mức bình quân tiền lương/năm</li>
                    <li>• <strong>Từ năm 2014:</strong> 2 tháng mức bình quân tiền lương/năm</li>
                    <li>• <strong>Mức lương trung bình:</strong> Tính theo mức lương đóng BHXH</li>
                    <li>• <strong>Lưu ý:</strong> Kết quả chỉ mang tính tham khảo, cần xác nhận với cơ quan BHXH</li>
                  </ul>
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
                    href="/gold"
                    className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                  >
                    Tính giá vàng
                  </Link>
                  <Link
                    href="/about"
                    className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                  >
                    Giới thiệu
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

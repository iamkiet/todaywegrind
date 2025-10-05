"use client";

import { useState } from "react";
import { IoDownloadOutline } from "react-icons/io5";

interface PDFDownloadButtonProps {
  document: React.ReactElement;
  fileName: string;
}

export default function PDFDownloadButton({
  document,
  fileName,
}: PDFDownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);

      // Use window.print() as a fallback for now
      // This will allow users to save as PDF using browser's print functionality
      window.print();
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50"
    >
      <IoDownloadOutline className="w-4 h-4" />
      {isLoading ? "Preparing..." : "Print/Save PDF"}
    </button>
  );
}

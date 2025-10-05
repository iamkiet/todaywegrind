"use client";

import React, { useState } from "react";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoCopyOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export default function ShareButtons({ slug, title }: ShareButtonsProps) {
  const blogUrl = `https://todaywegrind.com/blog/${slug}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(blogUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch {
      // Silent fail - could add a subtle error indicator if needed
    }
  };

  return (
    <div className="flex justify-center gap-2 mb-8">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          blogUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-2 py-1 border border-gray-200 text-gray-500 rounded hover:bg-gray-50 hover:text-blue-600 transition-colors text-xs"
        title="Share on Facebook"
      >
        <IoLogoFacebook className="w-5 h-5" />
        <span className="sr-only">Share on Facebook</span>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          blogUrl
        )}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-2 py-1 border border-gray-200 text-gray-500 rounded hover:bg-gray-50 hover:text-blue-400 transition-colors text-xs"
        title="Share on Twitter"
      >
        <IoLogoTwitter className="w-5 h-5" />
        <span className="sr-only">Share on Twitter</span>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className={`flex items-center gap-1 px-2 py-1 border rounded text-xs cursor-pointer transition-all duration-200 ${
          copied
            ? "border-green-300 bg-green-50 text-green-600"
            : "border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black"
        }`}
        title={copied ? "Copied!" : "Copy link"}
      >
        {copied ? (
          <>
            <IoCheckmarkOutline className="w-5 h-5" />
            <span className="sr-only">Copied!</span>
          </>
        ) : (
          <>
            <IoCopyOutline className="w-5 h-5" />
            <span className="sr-only">Copy link</span>
          </>
        )}
      </button>
    </div>
  );
}

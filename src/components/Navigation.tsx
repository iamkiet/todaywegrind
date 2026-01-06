"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "home" },
    { href: "/blog", label: "blog" },
    { href: "/about", label: "about" },
    { href: "/gold", label: "gold" },
    { href: "/social-insurance", label: "bhxh" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/blog") {
      return pathname === "/blog" || pathname.startsWith("/blog/");
    }
    return pathname === href;
  };

  return (
    <nav className="pt-8 pb-18">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-lg text-black hover:text-gray-600 transition-colors"
        >
          <span className="text-black italic">
            <span role="img" aria-label="hey" className="mr-1 align-middle">
              👋
            </span>
            today we grind!
          </span>
        </Link>
        <div className="space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                isActive(item.href)
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

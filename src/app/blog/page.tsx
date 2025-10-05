import { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Blog | Today We Grind - Coding, Coffee & Developer Lifestyle",
  description:
    "Explore todaywegrindcoding insights, todaywegrindcoffee moments, and authentic developer lifestyle content. Read the latest thoughts on coding, coffee culture, software engineering, and modern developer experiences.",
  keywords: [
    "todaywegrindcoding",
    "todaywegrindcoffee",
    "developer blog",
    "coding blog",
    "coffee coding",
    "developer lifestyle",
    "software engineering blog",
    "microservices",
    "kotlin",
    "react",
    "web development",
    "technology insights",
    "programming tips",
    "tech career",
    "developer productivity",
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
    title: "Blog | Today We Grind - Coding, Coffee & Developer Lifestyle",
    description:
      "Explore todaywegrindcoding insights, todaywegrindcoffee moments, and authentic developer lifestyle content. Read the latest thoughts on coding, coffee culture, and modern developer experiences.",
    url: "https://todaywegrind.com/blog",
    type: "website",
    images: [
      {
        url: "/kiet-profile-1.png",
        width: 1200,
        height: 630,
        alt: "Today We Grind Blog - Coding, Coffee & Developer Lifestyle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Today We Grind - Coding, Coffee & Developer Lifestyle",
    description:
      "Explore todaywegrindcoding insights, todaywegrindcoffee moments, and authentic developer lifestyle content.",
    images: ["/kiet-profile-1.png"],
  },
  alternates: {
    canonical: "https://todaywegrind.com/blog",
  },
};

export default function Blog() {
  // Read all markdown files in data/blog
  const postsDirectory = path.join(process.cwd(), "data/blog");
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"));
  const posts = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        readTime: data.readTime,
        excerpt:
          content
            .split("\n")
            .find(
              (line: string) =>
                line && !line.startsWith("#") && !line.startsWith("---")
            )
            ?.slice(0, 120) || "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8">
        <Navigation />

        {/* Blog Header */}
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
            blog
          </h1>
          <p className="text-sm text-gray-500 mt-2 italic">
            todaywegrindcoding • todaywegrindcoffee • developer lifestyle
          </p>
        </header>

        <main className="mb-16">
          <div className="space-y-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-100 pb-12 last:border-b-0"
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="flex items-start gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="mb-4">
                        <h2 className="text-xl font-light mb-3 group-hover:text-gray-600 transition-colors">
                          {post.title}
                        </h2>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                          <time>{post.date}</time>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                        read more →
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </main>

        {/* Back Link */}
        <div className="pb-8 text-center">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← back to home
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
}

import Link from "next/link";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "👋 Today We Grind! | Coding, Coffee & Developer Lifestyle",
  description:
    "Welcome to Today We Grind! Join Kiet Nguyen's journey of coding, coffee culture, and authentic developer lifestyle. Discover todaywegrindcoding tips, todaywegrindcoffee moments, and insights into the modern developer world.",
  openGraph: {
    title: "Today We Grind! | Coding, Coffee & Developer Lifestyle",
    description:
      "Welcome to Today We Grind! Join Kiet Nguyen's journey of coding, coffee culture, and authentic developer lifestyle. Discover todaywegrindcoding tips, todaywegrindcoffee moments, and insights into the modern developer world.",
    url: "https://todaywegrind.com",
    images: ["/kiet-profile-1.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Today We Grind",
            description:
              "Today We Grind is the ultimate destination for coding enthusiasts, coffee lovers, and developers embracing the modern lifestyle. Join Kiet Nguyen's journey of coding, coffee culture, and developer insights.",
            url: "https://todaywegrind.com",
            author: {
              "@type": "Person",
              name: "Kiet Nguyen",
              url: "https://todaywegrind.com",
              jobTitle: "Senior Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Thoughtworks",
              },
            },
            publisher: {
              "@type": "Organization",
              name: "Today We Grind",
              url: "https://todaywegrind.com",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://todaywegrind.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            mainEntity: {
              "@type": "Blog",
              name: "Today We Grind Blog",
              description: "Coding, Coffee & Developer Lifestyle",
              url: "https://todaywegrind.com/blog",
            },
          }),
        }}
      />
      <div className="max-w-2xl mx-auto px-8">
        <Navigation />
        <main>
          <section className="mb-28" aria-labelledby="hero-heading">
            <div className="text-left">
              <p className="text-gray-700 mb-6 font-light lowercase tracking-wide">
                coding, coffee, developer lifestyle
              </p>
              <p className="text-xs text-gray-500 mb-4 italic">
                todaywegrindcoding • todaywegrindcoffee • developer lifestyle
              </p>
              <div className="w-full flex flex-wrap gap-2 justify-start mt-4">
                <Link
                  href="/about"
                  className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                >
                  meet kiet
                </Link>
                <Link
                  href="/gallery"
                  className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                >
                  gallery
                </Link>
                <Link
                  href="/journey"
                  className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                >
                  journey
                </Link>
                <a
                  href="mailto:kietnguyen.me@gmail.com"
                  className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                  title="Copy my mail"
                >
                  email
                </a>
                <a
                  href="https://github.com/iamkiet"
                  className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  github
                </a>
                <a
                  href="https://linkedin.com/in/kiet-nguyen-tuan"
                  className="px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  linkedin
                </a>
                <Link
                  href="/resume"
                  className="px-4 py-2 bg-[#525a66] text-white text-xs rounded-full hover:bg-gray-700 transition-colors flex items-center gap-1"
                  title="Resume"
                >
                  <span
                    role="img"
                    aria-label="apple burger"
                    className="inline-block align-middle"
                  >
                    🍔
                  </span>
                  resume
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-28" aria-labelledby="latest-posts-heading">
            <div className="text-left">
              <h2
                id="latest-posts-heading"
                className="text-lg font-medium mb-6 tracking-wider"
              >
                Latest Posts
              </h2>
              <div className="space-y-6">
                {(() => {
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
                                line &&
                                !line.startsWith("#") &&
                                !line.startsWith("---")
                            )
                            ?.slice(0, 120) || "",
                      };
                    })
                    .sort(
                      (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    );
                  return posts.slice(0, 3).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <article className="border-b border-gray-100 pb-6 mt-8 group">
                        <div className="flex items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-sm group-hover:text-gray-600 transition-colors cursor-pointer">
                                {post.title}
                              </h3>
                              <time className="text-xs text-gray-400 flex-shrink-0 ml-4">
                                {post.date}
                              </time>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">
                              {post.excerpt}
                            </p>
                            <div className="mt-3">
                              <span className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                                read more →
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ));
                })()}
                <div className="pt-4">
                  <Link
                    href="/blog"
                    className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    view all posts →
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

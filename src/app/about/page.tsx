import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About | Today We Grind - Coding, Coffee & Developer Lifestyle",
  description:
    "Meet Kiet Nguyen from Today We Grind - Senior Software Engineer passionate about coding, coffee culture, and developer lifestyle. Discover todaywegrindcoding insights and todaywegrindcoffee moments from a developer who loves building scalable systems.",
  keywords: [
    "about today we grind",
    "about kiet nguyen",
    "todaywegrindcoding",
    "todaywegrindcoffee",
    "developer lifestyle",
    "software engineer",
    "microservices expert",
    "kotlin developer",
    "react developer",
    "coffee coding",
    "thoughtworks",
    "developer profile",
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
    title: "About | Today We Grind - Coding, Coffee & Developer Lifestyle",
    description:
      "Meet Kiet Nguyen from Today We Grind - Senior Software Engineer passionate about coding, coffee culture, and developer lifestyle. Discover todaywegrindcoding insights and todaywegrindcoffee moments.",
    url: "https://todaywegrind.com/about",
    type: "profile",
    images: [
      {
        url: "/kiet-profile-2.png",
        width: 1200,
        height: 630,
        alt: "Kiet Nguyen - Today We Grind Developer Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Today We Grind - Coding, Coffee & Developer Lifestyle",
    description:
      "Meet Kiet Nguyen from Today We Grind - Senior Software Engineer passionate about coding, coffee culture, and developer lifestyle.",
    images: ["/kiet-profile-2.png"],
  },
  alternates: {
    canonical: "https://todaywegrind.com/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8">
        <Navigation />

        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
            about
          </h1>
          <p className="text-sm text-gray-500 italic">
            todaywegrindcoding • todaywegrindcoffee • developer lifestyle
          </p>
        </header>

        <main className="space-y-16">
          <section>
            <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 items-start">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0 bg-gray-100">
                <Image
                  src="/kiet-profile-2.png"
                  alt="Kiet Nguyen - Senior Software Engineer at Today We Grind - Coding, Coffee & Developer Lifestyle Expert"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 768px) 128px, 160px"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hi, I&apos;m Kiet Nguyen, a Senior Software Engineer,
                  JavaScript and Node.js enthusiast, and coffee holic. I love
                  building robust, maintainable systems and sharing my journey
                  with the developer community.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  My expertise spans from designing scalable backend APIs with
                  Node.js and Fastify to crafting modern web apps with ReactJS.
                  I&apos;m passionate about JavaScript, cloud-native
                  architectures, and always on the lookout for the next great
                  cup of coffee.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me experimenting
                  with new JavaScript frameworks, mentoring developers, or
                  enjoying a strong Vietnamese coffee while brainstorming my
                  next project.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Current Role
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-black">
                    Senior Software Engineer
                  </h3>
                  <p className="text-gray-600">Thoughtworks</p>
                </div>
                <span className="text-sm text-gray-400">
                  Nov 2024 - Present
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Working as a Technical Anchor on an operations platform for a
                major Australian utility company. Leading technical decisions,
                mentoring team members, and driving architectural improvements
                across a complex microservices ecosystem.
              </p>

              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Key Technologies:</span>{" "}
                  Kotlin, Spring Boot 3, NestJS, ReactJS, PostgreSQL, Kafka, AWS
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Focus Areas:</span>{" "}
                  Microservices Architecture, Cloud Infrastructure, Performance
                  Optimization
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Technical Expertise
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-4 text-black">
                  Languages & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    Kotlin
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    Spring Boot
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4 text-black">
                  Infrastructure & Cloud
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    AWS
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    GCP
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    Kubernetes
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    Kafka
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    RabbitMQ
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    Jenkins
                  </span>
                  <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">
                    GitHub Actions
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Philosophy & Approach
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4 text-black">Code Quality</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  I believe in writing code that tells a story. Clean, readable
                  code isn&apos;t just about following conventions—it&apos;s
                  about respecting the next developer (who might be you in six
                  months) and building systems that can evolve gracefully over
                  time. JavaScript and Node.js have taught me the value of
                  clarity and simplicity in code.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-4 text-black">Architecture</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  I approach system design with pragmatism over perfectionism.
                  Every architectural decision should serve a business purpose
                  and be sustainable for the team maintaining it. I&apos;m a
                  strong advocate for evolutionary architecture, continuous
                  improvement, and using the right tool for the job—whether
                  that&apos;s Node.js, React, or something new.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-4 text-black">Collaboration</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  The best software is built by teams, not individuals. I value
                  mentoring junior developers, facilitating technical
                  discussions, and creating an environment where everyone feels
                  comfortable contributing ideas and asking questions.
                  Coffee-fueled brainstorming sessions are my favorite!
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Beyond Coding
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-3 text-black">Learning</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-2">
                  Currently exploring advanced JavaScript patterns, Node.js
                  performance tuning, and diving deeper into the world of
                  backend APIs and cloud-native development.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Always reading technical books, experimenting with new
                  frameworks, and staying updated with the latest in the
                  JavaScript and Node.js ecosystem.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-black">Community</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-2">
                  Active in the local tech community, occasionally speaking at
                  meetups, helping organize coding workshops for newcomers, and
                  sharing my love for JavaScript and Node.js.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Believe in giving back through mentoring, open source, and
                  sharing knowledge—hence this blog!
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-100 pt-12">
            <h2 className="text-xl font-medium mb-6 text-black uppercase tracking-wider">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              I&apos;m always interested in discussing technology, sharing
              experiences, or exploring potential collaborations. Feel free to
              reach out!
            </p>

            <div className="flex space-x-4">
              <a
                href="mailto:kietnguyen.me@gmail.com"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/kiet-nguyen-tuan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Connect on LinkedIn
              </a>
              <Link
                href="/resume"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                View my resume
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Footer from "../../components/Footer";
import WorkExperienceBlock from "../../components/WorkExperienceBlock";
import ResumePDF from "../../components/ResumePDF";
import dynamic from "next/dynamic";
import {
  IoArrowBackOutline,
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
  IoCalendarOutline,
  IoSchoolOutline,
  IoTrophyOutline,
  IoCodeSlashOutline,
  IoLogoLinkedin,
  IoGlobeOutline,
  IoDownloadOutline,
} from "react-icons/io5";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

const workHistory = [
  {
    company: "Thoughtworks",
    role: "Senior Software Engineer (Technical Anchor)",
    period: "Nov 2024 - Now",
    project:
      "Operations Platform (Australia Electricity, Gas and Internet Provider)",
    architecture: "Microservice",
    techStack:
      "Kotlin (Spring Boot 3), NestJS, ReactJS, PostgreSQL, Kafka, Redis, Auth0, Docker, Jenkins, NewRelic, Snyk, Github Action, AWS",
    position: "Technical Anchor",
    achievements: [
      "Delivered a new microsite within a microservices setup, integrating SSO (Microsoft Entra ID), CI/CD (Jenkins, GitHub Actions), and AWS services.",
      "Built a transaction replay feature for recovering failed transactions, enhancing system resilience and empowering users to reprocess issues independently.",
      "AWS cost optimization by analyzing usage and re-architecting infrastructure, achieving major savings without affecting performance.",
      "Created a data comparison tool for validating data integrity during migrations and between source/target systems.",
      "Modernized legacy apps by migrating from .NET Framework/IIS to Kotlin with Springboot 3, boosting performance and maintainability.",
      "Setup synthetic monitoring, alerting, and APM tools, improving issue detection across services using AWS CloudWatch, Snyk and NewRelic.",
      "Provided 24/7 support for legacy systems, ensuring uptime and reliability.",
      "Served as technical lead, owning systems end-to-end, preparing reports, and representing the team in client discussions.",
      "Mentored developers, reviewed code and designs, and advised on technical challenges.",
      "Interviewed candidates and training sessions for new hires and freshers.",
    ],
  },
  {
    company: "Cyberlogitec",
    role: "Technical Architect",
    period: "Oct 2023 - Oct 2024",
    project: "Customer Order Plan (Largest Shipping Company)",
    architecture: "Microservice - Message queue: Kafka (Confluent)",
    techStack:
      "NestJS, NextJS, PostgreSQL, Redis, Styra OPA, Docker, K8s, Github Action, ArgoCD, GCP",
    position: "Technical Architect",
    achievements: [
      "Defined software architecture, source code structure, version control, infrastructure, and cloud project setup from the ground up.",
      "Established GitOps workflows, service communication patterns, and high-level architecture guidelines.",
      "Deployed and maintained a self-hosted scheduler service for recurring and scheduled tasks.",
      "Integrated SonarCloud with GitHub Actions to improve code quality through continuous analysis.",
      "Designed and optimized a message queue system to support large-scale message processing and monitoring.",
      "Researched and implemented a monitoring tool to detect data discrepancies between producers and consumers.",
      "Translated technical documents into actionable diagrams and collaborated with third-party vendors.",
      "Refactored legacy system queries into testable code, optimizing performance and enabling unit testing.",
      "Coordinated with the cloud infrastructure team to manage resource provisioning and access control.",
      "Collaborated with architecture consultants to maintain standards across regions and align with best practices.",
      "Partnered with Product Owners to gather requirements, design solutions, and deliver template implementations.",
      "Provided technical leadership to developers and QCs, offering reviews and guidance on complex issues.",
      "Interviewed candidates and conducted training for the fresher onboarding program.",
    ],
  },
  {
    company: "Tiki Corporation",
    role: "Senior Software Engineer",
    period: "Apr 2021 - Sep 2023",
    project: "After-sales, Transportation",
    architecture: "Microservice - Message queue: Kafka",
    techStack:
      "Django, ReactJS, PostgreSQL, Redis, ElasticSearch, Docker, Jenkin, Grafana, Redash, Kibana, Sentry",
    position: "Senior Software Engineer",
    achievements: [
      "Worked on Aftersales system to handle return goods, inbound, grading and providing a solution for return goods.",
      "Building an entire warehouse liquidation feature can help the company release the broken, out-of-date products by supporting warehouse users to scan the product, evaluate per a formula and give a classification. This process has many challenges to integrate with many internal operation systems and takes more time to test from developer to warehouse user.",
      "Analyze and join in designing a system to split the return goods feature from the legacy monolithic project, expose an endpoint and ensure that data is communicated consistently between services.",
      "Develop UI interactive with scanning devices (PDA), dashboard and filtering products that support warehouse staff can inbound the product for each order.",
      "Building a common dynamic table component that supports rendering new dashboards quickly with configuration input.",
    ],
  },
  {
    company: "NashTech",
    role: "Senior Software Engineer (Promotion)",
    period: "May 2018 - Mar 2021",
    project: "Education Management system (UK Education Company)",
    architecture: "Microservice - Message queue: RabbitMQ",
    techStack:
      "NodeJS, ReactJS, MySQL, Redis, Docker, Jenkin, AWS EC2, AWS CloudWatch, AWS Secret Manager",
    position: "Senior Software Engineer",
    achievements: [
      "Worked directly with the client to handle the assigned task and clarify business rules and expectations.",
      "Provide high/low-level system design for features.",
      "Developed feature under microservice architecture and handled service communication using RabbitMQ.",
      "Provide end-points to client sites and other parties.",
      "Compose change requests to prepare for next release such as which code will be deployed, list out some environment changes and which database part impacted.",
      "Tracing and analyzing the log, legacy data to find the root cause of some legacy issues.",
      "Increase Unit testing coverage and write for older features and new implementations.",
      "Written a technical document for a team member when the team process changes such as git flow, enhancement or new implementation.",
      "Interview new candidates and train for the fresher program.",
    ],
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="max-w-4xl mx-auto my-4 px-4 bg-gray-100">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm"
          >
            <IoArrowBackOutline className="w-4 h-4" />
            Back to Home
          </Link>

          <PDFDownloadLink
            document={<ResumePDF />}
            fileName="Kiet_Nguyen_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white text-xs rounded-full hover:bg-gray-700 transition-colors"
          >
            {({ loading }) => (
              <>
                <IoDownloadOutline className="w-4 h-4" />
                {loading ? "Generating PDF..." : "Download PDF"}
              </>
            )}
          </PDFDownloadLink>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-700 text-white p-6 rounded-t-lg">
          <h1 className="text-3xl font-bold mb-1 uppercase tracking-wide">
            KIET NGUYEN
          </h1>
          <p className="text-lg text-gray-300">Software Engineer</p>
        </div>

        <div className="bg-gray-200 p-6">
          <p className="text-gray-800 text-sm leading-relaxed">
            Software engineer (8+ YOE) with a strong foundation in designing,
            highly experienced in all phases of the software development
            lifecycle, from concept and architecture to deployment and
            optimization. I enjoy designing scalable systems, improving
            performance, and automating processes. Known for being
            detail-oriented, collaborative, and committed to building
            high-quality solutions.
          </p>
        </div>

        <div className="bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <IoCalendarOutline className="w-4 h-4 text-gray-600" />
                    <span className="font-semibold text-black">
                      Since:
                    </span>{" "}
                    <span>1996</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoCallOutline className="w-4 h-4 text-gray-600" />
                    <span className="font-semibold text-black">
                      Phone:
                    </span>{" "}
                    <span>hidden</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoLocationOutline className="w-4 h-4 text-gray-600" />
                    <span className="font-semibold text-black">
                      Address:
                    </span>{" "}
                    <span>Tan Binh District, HCMC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoMailOutline className="w-4 h-4 text-gray-600" />
                    <span className="font-semibold text-black">
                      Email:
                    </span>{" "}
                    <span>kietnguyen.me@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="border-t-4 border-black w-24"></div>

              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase flex items-center gap-2">
                  <IoSchoolOutline className="w-5 h-5" />
                  Educational
                </h2>
                <div>
                  <h3 className="font-semibold text-black text-sm">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-black text-sm">
                    University of Science, Viet Nam National University
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase flex items-center gap-2">
                  <IoTrophyOutline className="w-5 h-5" />
                  Certificates
                </h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-black">
                      HackerRank - SQL (Advanced) Certificate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase">
                  Skills and Proficiencies
                </h2>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">
                          Programming language:
                        </span>{" "}
                        JavaScript, Python, Kotlin
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Technology:</span>{" "}
                        Docker, K8s, Jenkins, Grafana, Kibana, Redash, ArgoCD,
                        NewRelic, Datadog, Auth0, Snyk, New Relic
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Message Queue:</span>{" "}
                        Kafka, RabbitMQ
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Cloud Platform:</span>{" "}
                        AWS, GCP
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Base:</span> OOP, Data
                        structure
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <p className="text-black mr-2">•</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-black">
                        <span className="font-semibold">Grown:</span> training
                        and evaluating developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Links */}
              <div>
                <h2 className="text-lg font-bold text-black mb-4 uppercase">
                  Additional Links
                </h2>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <IoCodeSlashOutline className="w-4 h-4 text-gray-600" />
                    <span className="font-semibold">GitHub:</span>
                    <span className="text-gray-700">github.com/iamkiet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoLogoLinkedin className="w-4 h-4 text-gray-600" />
                    <span className="font-semibold">LinkedIn:</span>
                    <span className="text-gray-700">
                      linkedin.com/in/kiet-nguyen-tuan
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoGlobeOutline className="w-4 h-4 text-gray-600" />
                    <span className="font-semibold">Blog:</span>
                    <span className="text-gray-700">
                      https://todaywegrind.com/blog
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6">
          <h2 className="text-lg font-bold text-black mb-4 uppercase tracking-wide">
            Work History
          </h2>
          <div>
            {workHistory.map((exp, idx) => (
              <WorkExperienceBlock
                key={idx}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                project={exp.project}
                architecture={exp.architecture}
                techStack={exp.techStack}
                position={exp.position}
                achievements={exp.achievements}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 0,
    fontFamily: "Helvetica",
    width: "100%",
    fontSize: 10,
  },
  header: {
    backgroundColor: "#374151",
    color: "white",
    padding: 20,
    marginBottom: 0,
    width: "100%",
  },
  headerName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 14,
    color: "#d1d5db",
    marginBottom: 0,
  },
  summary: {
    backgroundColor: "#f3f4f6",
    padding: 20,
    marginBottom: 0,
    width: "100%",
  },
  summaryText: {
    fontSize: 12,
    lineHeight: 1.4,
    color: "#1f2937",
  },
  mainContent: {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    width: "100%",
  },
  leftColumn: {
    width: "50%",
    paddingRight: 16,
  },
  rightColumn: {
    width: "50%",
    paddingLeft: 16,
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: "#111827",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
    marginRight: 8,
  },
  contactValue: {
    fontSize: 10,
    color: "#374151",
  },
  educationTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  educationSubtitle: {
    fontSize: 10,
    color: "#374151",
  },
  skillItem: {
    flexDirection: "row",
    marginBottom: 6,
  },
  skillLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
    marginRight: 8,
  },
  skillValue: {
    fontSize: 10,
    color: "#374151",
    flex: 1,
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  linkLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
    marginRight: 8,
  },
  linkValue: {
    fontSize: 10,
    color: "#6b7280",
  },
  workHistory: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 0,
    width: "100%",
  },
  workHistoryTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#111827",
  },
  workItem: {
    marginBottom: 4,
    paddingBottom: 1,
  },
  workCompany: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  workRole: {
    fontSize: 11,
    color: "#374151",
    marginBottom: 6,
  },
  workDetailsRow: {
    flexDirection: "row",
    marginBottom: 2,
    width: "100%",
  },
  workDetailColumn: {
    flex: 1,
    marginRight: 10,
    width: "50%",
  },
  workDetailLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 2,
  },
  workDetailValue: {
    fontSize: 10,
    color: "#374151",
    marginBottom: 3,
  },
  achievements: {
    marginTop: 2,
  },
  achievementItem: {
    flexDirection: "row",
    marginBottom: 0,
  },
  achievementBullet: {
    fontSize: 11,
    color: "#6b7280",
    marginRight: 6,
    marginTop: 2,
  },
  achievementText: {
    fontSize: 11,
    color: "#374151",
    flex: 1,
    lineHeight: 1.2,
  },
});

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

const ResumePDF = () => (
  <Document>
    {/* Page 1: Personal Information + Thoughtworks */}
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerName}>KIET NGUYEN</Text>
        <Text style={styles.headerTitle}>Software Engineer</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* Contact Information */}
          <View style={styles.section}>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Since:</Text>
              <Text style={styles.contactValue}>1996</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Phone:</Text>
              <Text style={styles.contactValue}>hidden</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Address:</Text>
              <Text style={styles.contactValue}>Tan Binh District, HCMC</Text>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.contactLabel}>Email:</Text>
              <Text style={styles.contactValue}>kietnguyen.me@gmail.com</Text>
            </View>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Educational</Text>
            <Text style={styles.educationTitle}>
              Bachelor of Science in Information Technology
            </Text>
            <Text style={styles.educationSubtitle}>
              University of Science, Viet Nam National University
            </Text>
          </View>

          {/* Certificates */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certificates</Text>
            <Text style={styles.contactValue}>
              HackerRank - SQL (Advanced) Certificate
            </Text>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills and Proficiencies</Text>

            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Programming language:</Text>
              <Text style={styles.skillValue}>JavaScript, Python, Kotlin</Text>
            </View>

            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Technology:</Text>
              <Text style={styles.skillValue}>
                Docker, K8s, Jenkins, Grafana, Kibana, Redash, ArgoCD, NewRelic,
                Datadog, Auth0, Snyk, New Relic
              </Text>
            </View>

            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Message Queue:</Text>
              <Text style={styles.skillValue}>Kafka, RabbitMQ</Text>
            </View>

            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Cloud Platform:</Text>
              <Text style={styles.skillValue}>AWS, GCP</Text>
            </View>

            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Base:</Text>
              <Text style={styles.skillValue}>OOP, Data structure</Text>
            </View>

            <View style={styles.skillItem}>
              <Text style={styles.skillLabel}>Grown:</Text>
              <Text style={styles.skillValue}>
                training and evaluating developer
              </Text>
            </View>
          </View>

          {/* Additional Links */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Links</Text>

            <View style={styles.linkItem}>
              <Text style={styles.linkLabel}>GitHub:</Text>
              <Text style={styles.linkValue}>github.com/iamkiet</Text>
            </View>

            <View style={styles.linkItem}>
              <Text style={styles.linkLabel}>LinkedIn:</Text>
              <Text style={styles.linkValue}>
                linkedin.com/in/kiet-nguyen-tuan
              </Text>
            </View>

            <View style={styles.linkItem}>
              <Text style={styles.linkLabel}>Blog:</Text>
              <Text style={styles.linkValue}>
                https://todaywegrind.com/blog
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Work History - Thoughtworks only */}
      <View style={styles.workHistory}>
        <Text style={styles.workHistoryTitle}>Work History</Text>

        {/* Thoughtworks */}
        <View style={styles.workItem}>
          <Text style={styles.workCompany}>Thoughtworks</Text>
          <Text style={styles.workRole}>
            Senior Software Engineer (Technical Anchor) | Nov 2024 - Now
          </Text>

          <View style={styles.workDetailsRow}>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Project:</Text>
              <Text style={styles.workDetailValue}>
                Operations Platform (Australia Electricity, Gas and Internet
                Provider)
              </Text>
            </View>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Architecture:</Text>
              <Text style={styles.workDetailValue}>Microservice</Text>
            </View>
          </View>

          <View style={styles.workDetailsRow}>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Tech-stack:</Text>
              <Text style={styles.workDetailValue}>
                Kotlin (Spring Boot 3), NestJS, ReactJS, PostgreSQL, Kafka,
                Redis, Auth0, Docker, Jenkins, NewRelic, Snyk, Github Action,
                AWS
              </Text>
            </View>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Role:</Text>
              <Text style={styles.workDetailValue}>Technical Anchor</Text>
            </View>
          </View>

          <View style={styles.achievements}>
            {workHistory[0].achievements.map((achievement, idx) => (
              <View key={idx} style={styles.achievementItem}>
                <Text style={styles.achievementBullet}>•</Text>
                <Text style={styles.achievementText}>{achievement}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>

    {/* Page 2: Cyberlogitec + Tiki */}
    <Page size="A4" style={styles.page}>
      <View style={styles.workHistory}>
        <Text style={styles.workHistoryTitle}>Work History (Continued)</Text>

        {/* Cyberlogitec */}
        <View style={styles.workItem}>
          <Text style={styles.workCompany}>Cyberlogitec</Text>
          <Text style={styles.workRole}>
            Technical Architect | Oct 2023 - Oct 2024
          </Text>

          <View style={styles.workDetailsRow}>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Project:</Text>
              <Text style={styles.workDetailValue}>
                Customer Order Plan (Largest Shipping Company)
              </Text>
            </View>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Architecture:</Text>
              <Text style={styles.workDetailValue}>
                Microservice - Message queue: Kafka (Confluent)
              </Text>
            </View>
          </View>

          <View style={styles.workDetailsRow}>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Tech-stack:</Text>
              <Text style={styles.workDetailValue}>
                NestJS, NextJS, PostgreSQL, Redis, Styra OPA, Docker, K8s,
                Github Action, ArgoCD, GCP
              </Text>
            </View>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Role:</Text>
              <Text style={styles.workDetailValue}>Technical Architect</Text>
            </View>
          </View>

          <View style={styles.achievements}>
            {workHistory[1].achievements.map((achievement, idx) => (
              <View key={idx} style={styles.achievementItem}>
                <Text style={styles.achievementBullet}>•</Text>
                <Text style={styles.achievementText}>{achievement}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Tiki Corporation */}
        <View style={styles.workItem}>
          <Text style={styles.workCompany}>Tiki Corporation</Text>
          <Text style={styles.workRole}>
            Senior Software Engineer | Apr 2021 - Sep 2023
          </Text>

          <View style={styles.workDetailsRow}>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Project:</Text>
              <Text style={styles.workDetailValue}>
                After-sales, Transportation
              </Text>
            </View>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Architecture:</Text>
              <Text style={styles.workDetailValue}>
                Microservice - Message queue: Kafka
              </Text>
            </View>
          </View>

          <View style={styles.workDetailsRow}>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Tech-stack:</Text>
              <Text style={styles.workDetailValue}>
                Django, ReactJS, PostgreSQL, Redis, ElasticSearch, Docker,
                Jenkin, Grafana, Redash, Kibana, Sentry
              </Text>
            </View>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Role:</Text>
              <Text style={styles.workDetailValue}>
                Senior Software Engineer
              </Text>
            </View>
          </View>

          <View style={styles.achievements}>
            {workHistory[2].achievements.map((achievement, idx) => (
              <View key={idx} style={styles.achievementItem}>
                <Text style={styles.achievementBullet}>•</Text>
                <Text style={styles.achievementText}>{achievement}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>

    {/* Page 3: NashTech */}
    <Page size="A4" style={styles.page}>
      <View style={styles.workHistory}>
        <Text style={styles.workHistoryTitle}>Work History (Continued)</Text>

        {/* NashTech */}
        <View style={styles.workItem}>
          <Text style={styles.workCompany}>NashTech</Text>
          <Text style={styles.workRole}>
            Senior Software Engineer (Promotion) | May 2018 - Mar 2021
          </Text>

          <View style={styles.workDetailsRow}>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Project:</Text>
              <Text style={styles.workDetailValue}>
                Education Management system (UK Education Company)
              </Text>
            </View>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Architecture:</Text>
              <Text style={styles.workDetailValue}>
                Microservice - Message queue: RabbitMQ
              </Text>
            </View>
          </View>

          <View style={styles.workDetailsRow}>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Tech-stack:</Text>
              <Text style={styles.workDetailValue}>
                NodeJS, ReactJS, MySQL, Redis, Docker, Jenkin, AWS EC2, AWS
                CloudWatch, AWS Secret Manager
              </Text>
            </View>
            <View style={styles.workDetailColumn}>
              <Text style={styles.workDetailLabel}>Role:</Text>
              <Text style={styles.workDetailValue}>
                Senior Software Engineer
              </Text>
            </View>
          </View>

          <View style={styles.achievements}>
            {workHistory[3].achievements.map((achievement, idx) => (
              <View key={idx} style={styles.achievementItem}>
                <Text style={styles.achievementBullet}>•</Text>
                <Text style={styles.achievementText}>{achievement}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;

# Today We Grind

> **coding, coffee, developer lifestyle**

A modern developer portfolio and blog website showcasing the journey of Kiet Nguyen, a Senior Software Engineer passionate about coding, coffee culture, and authentic developer lifestyle.

## 🌟 About Today We Grind

Today We Grind represents the intersection of technology, creativity, and lifestyle. It's more than just a portfolio—it's a space where coding meets coffee culture, where technical expertise blends with personal insights, and where the developer journey is shared authentically.

### Brand Values

- **Authenticity**: Real experiences from a working software engineer
- **Community**: Sharing knowledge and insights with fellow developers
- **Lifestyle**: Embracing the coffee-fueled coding culture
- **Growth**: Continuous learning and professional development

## 🚀 Features

### Portfolio & Resume

- **Interactive Resume**: Downloadable PDF with comprehensive work history
- **Professional Experience**: 8+ years in software engineering
- **Technical Expertise**: Microservices, Kotlin, React, Cloud Architecture
- **Current Role**: Senior Software Engineer (Technical Anchor) at Thoughtworks

### Blog & Content

- **Technical Insights**: Deep dives into coding practices and architecture
- **Coffee Culture**: The intersection of caffeine and code
- **Developer Lifestyle**: Authentic experiences from the tech industry
- **Learning Journey**: Sharing knowledge and growth experiences

### Modern Web Experience

- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Comprehensive metadata and structured data
- **Performance**: Built with Next.js 15 and modern web standards
- **Accessibility**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

### Frontend

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **React Icons**: Consistent iconography

### Content Management

- **Markdown**: Blog posts with frontmatter
- **Gray Matter**: Frontmatter parsing
- **React Markdown**: Markdown rendering with syntax highlighting

### PDF Generation

- **@react-pdf/renderer**: Dynamic resume PDF generation

### Analytics & SEO

- **Vercel Analytics**: Performance monitoring
- **Structured Data**: JSON-LD for search engines
- **Sitemap & Robots**: Automated SEO optimization

## 📁 Project Structure

```
todaywegrind/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog listing and posts
│   │   ├── resume/            # Resume page with PDF download
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── robots.ts          # SEO robots.txt
│   │   └── sitemap.ts         # SEO sitemap
│   ├── components/            # Reusable components
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── ResumePDF.tsx
│   │   ├── ShareButtons.tsx
│   │   └── WorkExperienceBlock.tsx
│   └── styles/
├── data/
│   └── blog/                  # Markdown blog posts
├── public/                    # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/iamkiet/todaywegrind.git
   cd todaywegrind
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in `data/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   slug: your-post-slug
   title: Your Post Title
   date: 2025-01-XX
   readTime: X min read
   description: Post description for SEO
   keywords: [keyword1, keyword2]
   ---
   ```
3. Write your content in Markdown
4. The post will automatically appear in the blog listing

### Updating Resume

- Edit `src/components/ResumePDF.tsx` for PDF content
- Update `src/app/resume/page.tsx` for web display
- Work history is maintained in both files for consistency

## 🎨 Brand Guidelines

### Typography

- **Primary Font**: Geist (loaded via Next.js font optimization)
- **Headings**: Clean, modern sans-serif
- **Body Text**: Readable, accessible typography

### Color Palette

- **Primary**: Gray scale (#374151, #6B7280, #9CA3AF)
- **Accent**: Blue (#3B82F6) for resume/CV
- **Background**: Clean white (#FFFFFF)

### Visual Style

- **Minimalist**: Clean, uncluttered design
- **Professional**: Business-appropriate aesthetics
- **Personal**: Authentic developer personality

## 🌐 SEO & Performance

### Search Engine Optimization

- **Structured Data**: JSON-LD for rich snippets
- **Meta Tags**: Comprehensive Open Graph and Twitter Cards
- **Sitemap**: Auto-generated XML sitemap
- **Robots**: Proper crawling directives

### Performance Features

- **Image Optimization**: Next.js Image component
- **Font Optimization**: Automatic font loading
- **Code Splitting**: Automatic bundle optimization
- **Static Generation**: Pre-rendered pages for speed

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms

- **Netlify**: Compatible with Next.js static export
- **AWS**: Can be deployed to S3 + CloudFront
- **Docker**: Containerized deployment available

## 📊 Analytics & Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Core Web Vitals**: Automatic performance tracking
- **Error Monitoring**: Production error tracking

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [todaywegrind.com](https://todaywegrind.com)
- **Email**: kietnguyen.me@gmail.com
- **LinkedIn**: [linkedin.com/in/kiet-nguyen-tuan](https://linkedin.com/in/kiet-nguyen-tuan)
- **GitHub**: [github.com/iamkiet](https://github.com/iamkiet)

---

**Today We Grind** - _Where coding meets coffee culture_ ☕️💻

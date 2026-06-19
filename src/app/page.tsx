import Image from "next/image";

const siteUrl = "https://hari27om.online";

const projects = [
  {
    name: "Dry Dash Operations Dashboard",
    type: "Full-stack web product",
    description:
      "A reporting and operations interface for laundry workflows, order visibility, customer records, delivery checks, and image-backed status updates. The work combines React screens with backend APIs so teams can review orders, resolve exceptions, and track fulfillment without jumping between tools.",
    stack: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    name: "Rider Delivery App",
    type: "Mobile app workflow",
    description:
      "A lightweight mobile workflow for riders handling active tasks, navigation context, proof of delivery, payment confirmation, and real-time status updates. The focus is practical field usage: fast screens, clear actions, and simple mobile interactions built with Expo and TypeScript.",
    stack: ["React Native", "Expo", "TypeScript", "Maps"],
  },
  {
    name: "Personal Portfolio Platform",
    type: "Next.js static website",
    description:
      "A fast, static portfolio built with Next.js and Tailwind CSS to present projects, skills, experience, and contact paths. The site is optimized for technical SEO, clear content structure, descriptive anchors, structured data, and stable layout rendering.",
    stack: ["Next.js", "Tailwind CSS", "Static Export", "SEO"],
  },
];

const skills = [
  {
    title: "Frontend Engineering",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Component architecture",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST API development",
      "Authentication",
      "Data modeling",
    ],
  },
  {
    title: "Mobile & Delivery",
    items: [
      "React Native",
      "Expo",
      "Mobile app development",
      "Rider workflows",
      "Map-based flows",
      "Operational dashboards",
    ],
  },
];

const stats = [
  ["10+", "production screens shipped"],
  ["3", "active product surfaces"],
  ["100%", "focused on practical execution"],
];

const process = [
  {
    title: "Understand the workflow",
    description:
      "I start by mapping the real user task, the backend contract, and the data states that can appear in production. This keeps the interface grounded in the way operators, riders, admins, or customers actually use the product.",
  },
  {
    title: "Build the smallest complete path",
    description:
      "I prefer shipping a reliable end-to-end flow before expanding the surface area. That means clean React components, predictable API integration, useful loading states, and direct handling of edge cases.",
  },
  {
    title: "Refine for speed and trust",
    description:
      "After the core behavior works, I tighten performance, accessibility, responsive layout, error handling, and SEO details so the product feels stable on desktop and mobile devices.",
  },
];

const faqs = [
  {
    question: "What kind of software work does Hari Om Tripathi focus on?",
    answer:
      "Hari focuses on full-stack software engineering for web and mobile products, including React interfaces, Next.js websites, Node.js APIs, MongoDB-backed systems, React Native apps, and operational dashboards.",
  },
  {
    question: "Which technologies are highlighted in this portfolio?",
    answer:
      "The portfolio highlights React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, REST API development, React Native, Expo, mobile app development, and practical deployment-ready product work.",
  },
  {
    question: "Can this portfolio support project case studies and a blog later?",
    answer:
      "Yes. The current homepage is structured so About, Experience, Projects, Skills, FAQ, and Contact sections can later expand into dedicated pages, technical articles, resume downloads, and individual case studies.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hari Om Tripathi",
  jobTitle: "Full Stack Software Engineer",
  url: siteUrl,
  image: `${siteUrl}/portfolio-hero.png`,
  description:
    "Full Stack Software Engineer building React, Next.js, Node.js, TypeScript, and mobile app products.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "REST API Development",
    "React Native",
    "Expo",
    "Mobile App Development",
    "Full Stack Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hari Om Tripathi Portfolio",
  url: siteUrl,
  inLanguage: "en",
  description:
    "Portfolio website for Hari Om Tripathi, Full Stack Software Engineer focused on web, mobile, backend, and product engineering.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="bg-[#f6f1e8] text-[#151515]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personSchema, websiteSchema, faqSchema]),
        }}
      />

      <header className="sticky top-0 z-20 border-b border-[#151515]/10 bg-[#f6f1e8]/88 backdrop-blur">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        >
          <a href="#top" className="text-sm font-semibold tracking-normal">
            Hari Om Tripathi
          </a>
          <div className="hidden items-center gap-7 text-sm text-[#4f4a43] md:flex">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#faq">FAQ</a>
          </div>
          <a
            href="#contact"
            className="rounded-lg border border-[#151515] px-4 py-2 text-sm font-medium transition hover:bg-[#151515] hover:text-white"
          >
            Contact
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <p className="w-fit rounded-lg border border-[#151515]/15 bg-white/45 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6f3f19]">
            Full Stack Software Engineer
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-7xl">
            Building clean digital products for web and mobile.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f4a43]">
            I am Hari Om Tripathi, a software engineer building React,
            Next.js, Node.js, TypeScript, and mobile app experiences for real
            product workflows. My work connects polished interfaces with
            dependable backend systems, clear data models, and practical user
            journeys.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-[#151515] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
            >
              View full stack projects
            </a>
            <a
              href="#skills"
              className="rounded-lg border border-[#151515]/20 bg-white/45 px-5 py-3 text-sm font-semibold transition hover:border-[#151515]"
            >
              Explore technical skills
            </a>
          </div>
        </div>

        <div className="relative aspect-square w-full">
          <div className="absolute -left-3 top-7 h-full w-full border border-[#151515]/20" />
          <Image
            src="/portfolio-hero.png"
            alt="Abstract developer workspace illustration for full stack software portfolio"
            width={1254}
            height={1254}
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority
            className="relative h-full w-full border border-[#151515]/15 object-cover shadow-[14px_14px_0_#151515]"
          />
        </div>
      </section>

      <section className="border-y border-[#151515]/10 bg-[#151515] text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p className="text-4xl font-semibold text-[#f5b35d]">{value}</p>
              <p className="mt-2 text-sm text-white/68">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f3f19]">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Full-stack development with product context.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#4f4a43]">
            <p>
              I build software that sits close to day-to-day operations:
              dashboards, rider flows, delivery tools, reporting views, and
              portfolio experiences. My frontend work uses React, Next.js,
              TypeScript, and Tailwind CSS to create responsive interfaces that
              are easy to scan and use. My backend work focuses on Node.js,
              Express, MongoDB, REST APIs, authentication, and data structures
              that support predictable product behavior.
            </p>
            <p>
              The projects in this portfolio are shaped around real workflow
              needs rather than decorative screens. I care about clear states,
              stable navigation, useful empty and error handling, and matching
              the UI to the actual backend payload. That approach helps web and
              mobile products feel reliable for operators, customers, and field
              teams.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-[#151515]/10 bg-white/35">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f3f19]">
                Selected projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                Web, mobile, and backend product work.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#4f4a43]">
              These project summaries give search engines and visitors clearer
              context around React development, mobile app development, API
              work, dashboards, and deployment-ready product thinking.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="flex min-h-[430px] flex-col rounded-lg border border-[#151515]/12 bg-[#f6f1e8] p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-[#6f3f19]">
                    0{index + 1}
                  </span>
                  <span className="rounded-lg bg-[#dfe8dc] px-3 py-1 text-xs font-medium text-[#24543b]">
                    {project.type}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#4f4a43]">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[#151515]/12 px-3 py-1 text-xs text-[#4f4a43]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#e9eef1]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#315770]">
            Skills and technologies
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-5xl">
            A full-stack toolkit for shipping complete product flows.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#4f4a43]">
            My strongest work combines frontend engineering, backend
            development, and mobile app delivery. I use React and Next.js for
            web interfaces, TypeScript for safer implementation, Node.js and
            Express for API development, MongoDB for flexible product data, and
            React Native with Expo for lightweight mobile workflows.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-lg border border-[#151515]/10 bg-white/62 p-6"
              >
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-[#4f4a43]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 shrink-0 bg-[#315770]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f3f19]">
              Development process
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Calm, direct, and execution-focused.
            </h2>
          </div>
          <div className="space-y-4">
            {process.map((step) => (
              <article
                key={step.title}
                className="rounded-lg border border-[#151515]/12 bg-white/48 p-5"
              >
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-base leading-8 text-[#4f4a43]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-[#151515]/10 bg-[#efe3d1]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6f3f19]">
            FAQ
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-5xl">
            Common questions about this portfolio.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="rounded-lg border border-[#151515]/12 bg-white/42 p-6"
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-[#4f4a43]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-[#4f4a43]">
            Last updated: June 19, 2026.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#151515] text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-5 py-16 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f5b35d]">
              Contact
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-5xl">
              Want to discuss a web, mobile, or backend project?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68">
              Use this section for your real email, GitHub profile, LinkedIn
              profile, resume link, and project inquiry path. Adding verified
              profiles will strengthen trust signals and EEAT.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@hari27om.online"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#151515]"
            >
              Email Hari Om Tripathi
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              Review project case studies
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import certificates from "./data/certificates.json";

const assetBase =
  "https://raw.githubusercontent.com/m-musif/personal-portfolio-website/main/frontend/src/assets/projects";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function App() {
  const resumePath = `${import.meta.env.BASE_URL}Muhammad_Musif_RESUME.docx`;

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C", "C++", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "VLM",
        "Vision-Language Models",
        "PyTorch",
        "YOLOv8",
        "Computer Vision",
        "RAG",
        "FAISS",
        "Multi-Agent AI",
        "QLoRA",
        "Scikit-Learn",
        "Prompt Engineering",
      ],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Gradio"],
    },
    {
      title: "Backend Development",
      skills: [
        "FastAPI",
        "REST APIs",
        "Groq API",
        "Python Backend",
        "Streamlit",
        "Kafka",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQLite", "H2", "FAISS", "JSON Storage"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "GitHub Pages",
        "OpenCV",
        "Hugging Face",
        "Linux",
        "Google Colab",
        "Forage",
      ],
    },
  ];

  const projects = [
    {
      title: "Pakistan PSL Vision-Language Model",
      description:
        "Research-grade vision-language system for Pakistan Sign Language recognition, Urdu/English translation, and contextual explanation using QLoRA fine-tuning with a Gradio demo.",
      tech: ["VLM", "PyTorch", "Gradio", "QLoRA", "Computer Vision"],
      image: `${assetBase}/home-page.png`,
      github: "https://github.com/m-musif/Pakistan-PSL-VLM",
      badge: "Research",
    },
    {
      title: "AgriVision PK",
      description:
        "Computer vision pipeline for agricultural disease detection: ResNet18 transfer learning, OpenCV preprocessing, 38 PlantVillage classes, REST API + Streamlit demo with EN/UR advisory output.",
      tech: ["PyTorch", "ResNet18", "OpenCV", "FastAPI", "Streamlit"],
      image: `${assetBase}/upload-image.png`,
      github: "https://github.com/m-musif/agrivision-pk",
      badge: "Featured",
    },
    {
      title: "AI Solar Panel Defect Detection",
      description:
        "YOLOv8-based computer vision system for detecting defects in solar panels with a FastAPI backend and React frontend.",
      tech: ["YOLOv8", "FastAPI", "React", "Computer Vision"],
      image: `${assetBase}/detection-results.png`,
      github: "https://github.com/m-musif/AI-Solar-Panel-Defect-Detection",
      badge: "Featured",
    },
    {
      title: "Multi-Agent AI Career Assistant",
      description:
        "Multi-agent assistant for career guidance, research, memory, and AI-powered recommendations.",
      tech: ["FastAPI", "React", "Groq", "Multi-Agent AI"],
      image: `${assetBase}/multi-agent-memory.png`,
      github:
        "https://github.com/m-musif/Multi-Agent-AI-Career-Research-Assistant",
      badge: "Featured",
    },
    {
      title: "AI Document Search RAG Chatbot",
      description:
        "A RAG-based chatbot that lets users upload PDFs and ask questions with source-grounded answers.",
      tech: ["RAG", "FAISS", "FastAPI", "React"],
      image: `${assetBase}/answer.png`,
      github: "https://github.com/m-musif/AI-Document-Search-RAG-Chatbot",
      badge: "Featured",
    },
    {
      title: "AI Code Review Bot",
      description:
        "GitHub Actions bot that analyzes pull request diffs and generates AI-powered review feedback.",
      tech: ["GitHub Actions", "Groq", "Python", "Automation"],
      image: `${assetBase}/code-review-workflow.png`,
      github: "https://github.com/m-musif/AI-Code-Review-Bot",
      badge: "Automation",
    },
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold text-white">
            Musif<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-lg text-cyan-400">
            Computer Science Student @ FAST University
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Muhammad Musif
          </h1>

          <h2 className="mb-6 text-2xl text-slate-300 md:text-3xl">
            AI Engineer • Machine Learning Developer • Full-Stack AI Builder
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            Building AI-powered applications using React, FastAPI, Machine
            Learning, Computer Vision, VLM systems, RAG pipelines, and
            Multi-Agent AI.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400"
            >
              Contact Me
            </a>

            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              Resume
            </a>

            <a
              href="https://github.com/m-musif"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-musif/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mb-8 text-3xl font-bold md:text-5xl">
            Building practical AI products, not just demos.
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg leading-8 text-slate-300">
                I am a Computer Science student at FAST University with a strong
                interest in Artificial Intelligence, Machine Learning, Computer
                Vision, vision-language models, RAG systems, and full-stack AI
                applications. I focus on building real-world projects that combine
                clean frontend design, strong backend APIs, and practical AI
                workflows.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-bold text-cyan-400">8+</h3>
                <p className="text-slate-300">AI and software projects built</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-bold text-cyan-400">4</h3>
                <p className="text-slate-300">
                  Semesters completed in BS Computer Science
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-bold text-cyan-400">4</h3>
                <p className="text-slate-300">
                  Forage job simulations completed (June 2026)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Skills
          </p>

          <h2 className="mb-12 text-3xl font-bold md:text-5xl">
            Technologies I work with
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="mb-4 text-xl font-bold text-cyan-400">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Projects
          </p>

          <h2 className="mb-12 text-3xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-400"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                      {project.badge}
                    </span>
                  </div>

                  <p className="mb-4 text-slate-400">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-lg border border-slate-600 px-5 py-2 text-sm font-semibold transition hover:border-cyan-400"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Certifications
          </p>

          <h2 className="mb-12 text-3xl font-bold md:text-5xl">
            Forage Job Simulations
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert) => (
              <article
                key={cert.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">{cert.issuer}</h3>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                    {cert.platform}
                  </span>
                </div>

                <p className="mb-2 text-lg font-semibold text-slate-200">
                  {cert.title}
                </p>

                <p className="mb-4 text-sm text-slate-400">
                  Completed {formatDate(cert.date)}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">
                  <p>
                    <span className="font-semibold text-cyan-400">
                      Enrolment Code:
                    </span>{" "}
                    <code className="text-slate-200">{cert.enrolmentCode}</code>
                  </p>
                  <p>
                    <span className="font-semibold text-cyan-400">
                      User Code:
                    </span>{" "}
                    <code className="text-slate-200">{cert.userCode}</code>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Education
          </p>

          <h2 className="mb-12 text-3xl font-bold md:text-5xl">
            Academic Journey
          </h2>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-white">
              BS Computer Science
            </h3>

            <p className="mt-2 text-cyan-400">
              FAST National University of Computer & Emerging Sciences
            </p>

            <p className="mt-4 text-slate-300">
              Currently completed 4 semesters. Focused on Artificial
              Intelligence, Machine Learning, Software Engineering, Data
              Structures & Algorithms, Databases, and Full-Stack Development.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Computer Science",
                "Artificial Intelligence",
                "Machine Learning",
                "Software Engineering",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-800 px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="mb-10 text-slate-400">
            Interested in AI, Machine Learning, internships, hackathons,
            research, or collaboration opportunities? Feel free to connect with
            me.
          </p>

          <div className="mb-10 space-y-3 text-slate-300">
            <p>📧 muhammadmusif134@gmail.com</p>
            <p>📱 +92 328 5077456</p>
            <p>📍 Pakistan</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:muhammadmusif134@gmail.com"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Email Me
            </a>

            <a
              href="tel:+923285077456"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400"
            >
              Call Me
            </a>

            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400"
            >
              Resume
            </a>

            <a
              href="https://github.com/m-musif"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-musif/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-slate-400">
          <p>
            © 2026 Muhammad Musif. Built with React, Tailwind CSS, and
            AI-focused ambition. Hosted on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

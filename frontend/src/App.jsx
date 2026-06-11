import solarImage from "./assets/projects/detection-results.png";
import ragImage from "./assets/projects/answer.png";
import multiAgentImage from "./assets/projects/multi-agent-memory.png";
import codeReviewImage from "./assets/projects/code-review-workflow.png";

function App() {
  const resumePath = "/Muhammad_Musif_RESUME.docx";

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C", "C++", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "YOLOv8",
        "Computer Vision",
        "RAG",
        "FAISS",
        "Multi-Agent AI",
        "Scikit-Learn",
        "Prompt Engineering",
      ],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend Development",
      skills: ["FastAPI", "REST APIs", "Groq API", "Python Backend"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQLite", "FAISS", "JSON Storage"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "GitHub Actions", "Linux", "Google Colab"],
    },
  ];

  const projects = [
    {
      title: "AI Solar Panel Defect Detection",
      description:
        "YOLOv8-based computer vision system for detecting defects in solar panels with a FastAPI backend and React frontend.",
      tech: ["YOLOv8", "FastAPI", "React", "Computer Vision"],
      image: solarImage,
      github: "https://github.com/m-musif/AI-Solar-Panel-Defect-Detection",
      badge: "Featured",
    },
    {
      title: "Multi-Agent AI Career Assistant",
      description:
        "Multi-agent assistant for career guidance, research, memory, and AI-powered recommendations.",
      tech: ["FastAPI", "React", "Groq", "Multi-Agent AI"],
      image: multiAgentImage,
      github:
        "https://github.com/m-musif/Multi-Agent-AI-Career-Research-Assistant",
      badge: "Featured",
    },
    {
      title: "AI Document Search RAG Chatbot",
      description:
        "A RAG-based chatbot that lets users upload PDFs and ask questions with source-grounded answers.",
      tech: ["RAG", "FAISS", "FastAPI", "React"],
      image: ragImage,
      github: "https://github.com/m-musif/AI-Document-Search-RAG-Chatbot",
      badge: "Featured",
    },
    {
      title: "AI Code Review Bot",
      description:
        "GitHub Actions bot that analyzes pull request diffs and generates AI-powered review feedback.",
      tech: ["GitHub Actions", "Groq", "Python", "Automation"],
      image: codeReviewImage,
      github: "https://github.com/m-musif/AI-Code-Review-Bot",
      badge: "Automation",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold text-white">
            Musif<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="#skills" className="transition hover:text-cyan-400">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
            <a href="#education" className="transition hover:text-cyan-400">Education</a>
            <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="flex min-h-screen items-center justify-center px-6">
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
            Learning, Computer Vision, RAG Systems, and Multi-Agent AI.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
              View Projects
            </a>

            <a href="#contact" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400">
              Contact Me
            </a>

            <a href={resumePath} target="_blank" rel="noreferrer" className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black">
              Resume
            </a>

            <a href="https://github.com/m-musif" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/muhammad-musif/" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400">
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
                Vision, RAG systems, and full-stack AI applications. I focus on
                building real-world projects that combine clean frontend design,
                strong backend APIs, and practical AI workflows.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-bold text-cyan-400">6+</h3>
                <p className="text-slate-300">AI and software projects built</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-bold text-cyan-400">4</h3>
                <p className="text-slate-300">
                  Semesters completed in BS Computer Science
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-bold text-cyan-400">AI</h3>
                <p className="text-slate-300">
                  Focused on internships, hackathons, and real-world impact
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
              <div key={category.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-4 text-xl font-bold text-cyan-400">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200">
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
              <div key={project.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-400">
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />

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
                      <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-block rounded-lg border border-slate-600 px-5 py-2 text-sm font-semibold transition hover:border-cyan-400">
                    View GitHub
                  </a>
                </div>
              </div>
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
                <span key={item} className="rounded-full bg-slate-800 px-4 py-2 text-sm">
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
            Let's Build Something Amazing
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
            <a href="mailto:muhammadmusif134@gmail.com" className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
              Email Me
            </a>

            <a href="tel:+923285077456" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400">
              Call Me
            </a>

            <a href={resumePath} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400">
              Resume
            </a>

            <a href="https://github.com/m-musif" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/muhammad-musif/" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-slate-400">
          <p>
            © 2026 Muhammad Musif. Built with React, Tailwind CSS, and
            AI-focused ambition.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

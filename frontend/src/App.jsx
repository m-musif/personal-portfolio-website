function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold text-white">
            Musif<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
            Learning, Computer Vision, RAG Systems, and Multi-Agent AI.
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
          </div>
        </div>
      </section>

      {/* About Section */}
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
                <p className="text-slate-300">
                  AI and software projects built
                </p>
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

      {/* Placeholder Sections */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Skills section coming next...</h2>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Projects section coming next...</h2>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Contact section coming next...</h2>
        </div>
      </section>
    </div>
  );
}

export default App;

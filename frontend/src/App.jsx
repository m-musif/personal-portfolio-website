function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
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
            <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
              View Projects
            </button>

            <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400">
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

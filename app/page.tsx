import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">EngPrep</h1>

        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/practice">Practice</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Master Engineering Concepts.
          <br />
          Practice Interviews with AI.
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          EngPrep helps engineering students and early-career engineers study
          core technical concepts, practice interview-style questions, and get
          AI-powered feedback.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/practice"
            className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Get Started
          </Link>

          <Link
            href="/about"
            className="bg-white px-6 py-3 rounded-lg shadow hover:bg-gray-50 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center">Why EngPrep?</h3>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-bold text-lg">Concept Practice</h4>
            <p className="mt-2 text-gray-600 text-sm">
              Practice mechanics, aerospace, electrical, controls, and behavioral questions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-bold text-lg">AI Feedback</h4>
            <p className="mt-2 text-gray-600 text-sm">
              Explain your reasoning and get feedback like a technical interviewer.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-bold text-lg">Track Progress</h4>
            <p className="mt-2 text-gray-600 text-sm">
              See your accuracy, weakest topics, and session performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-bold text-lg">Guest Mode</h4>
            <p className="mt-2 text-gray-600 text-sm">
              Try the platform instantly without creating an account.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold">Built for Engineering Prep</h3>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Mechanics", "Aerospace", "Electrical", "Controls", "Behavioral"].map(
            (topic) => (
              <span
                key={topic}
                className="bg-white px-4 py-2 rounded-full shadow text-sm"
              >
                {topic}
              </span>
            )
          )}
        </div>
      </section>

      <section className="bg-black text-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold">Ready to start practicing?</h3>

          <p className="mt-4 text-gray-300">
            Build confidence before your next technical interview.
          </p>

          <Link
            href="/practice"
            className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Start Practicing
          </Link>
        </div>
      </section>

      <footer id="contact" className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        © 2026 EngPrep. Built for engineering students and early-career engineers.
      </footer>
    </main>
  );
}
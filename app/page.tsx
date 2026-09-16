"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

useEffect(() => {
  supabase.auth.getUser().then(({ data }) => {
    setUser(data.user);
  });

  const { data: listener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      setUser(session?.user ?? null);
    }
  );

  return () => {
    listener.subscription.unsubscribe();
  };
}, []);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-gray-100">
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 mb-6 md:mb-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <Image
                src="/engprep-logo.png"
                alt="EngPrep logo"
                width={150}
                height={150}
                className="w-10 h-10 object-contain"
              />

              <span className="text-xl md:text-2xl font-bold">
                EngPrep
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">

              <Link
                href="/"
                className="hover:text-gray-500 dark:hover:text-gray-400 transition"
              >
                Home
              </Link>

              <Link
                href="/practice"
                className="hover:text-gray-500 dark:hover:text-gray-400 transition"
              >
                Practice
              </Link>

              <Link
                href="/about"
                className="hover:text-gray-500 dark:hover:text-gray-400 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-gray-500 dark:hover:text-gray-400 transition"
              >
                Contact
              </Link>
              {/* {user ? (
                <button
                  onClick={() => supabase.auth.signOut()}
                  className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="hover:text-gray-500 dark:text-gray-400 transition"
                  >
                    Log In
                  </Link>

                  <Link
                    href="/login?mode=signup"
                    className="border border-gray-300 dark:border-gray-600 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    Sign Up
                  </Link>
                </>
              )} */}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                // X icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t mt-4 flex flex-col">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-200 dark:border-gray-700"
              >
                Home
              </Link>

              <Link
                href="/practice"
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-200 dark:border-gray-700"
              >
                Practice
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-200 dark:border-gray-700"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-200 dark:border-gray-700"
              >
                Contact
              </Link>
              {/* {user ? (
                <button
                  onClick={async () => {
                    await supabase.auth.signOut();
                    setMenuOpen(false);
                  }}
                  className="py-3 text-left"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="py-3 border-b border-gray-200 dark:border-gray-700"
                  >
                    Log In
                  </Link>

                  <Link
                    href="/login?mode=signup"
                    onClick={() => setMenuOpen(false)}
                    className="py-3 font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )} */}
            </div>
          )}

        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Master Engineering Concepts.
          <br />
          Practice Interviews.
        </h2>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          EngPrep helps engineering students and early-career engineers study
          core technical concepts, practice interview-style questions, and get
          immediate feedback with AI.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/practice"
            className="border border-gray-300 dark:border-gray-600 text-black dark:text-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Get Started
          </Link>

          <Link
            href="/about"
            className="border border-gray-300 dark:border-gray-600 text-black dark:text-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center">Why EngPrep?</h3>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
            <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Concept Practice</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Practice mechanics, aerospace, electrical, controls, and behavioral questions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
            <h4 className="font-semibold text-lg text-gray-900 dark:text-white">AI Feedback</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Explain your reasoning and get feedback like a technical interviewer.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
            <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Track Progress</h4>
            <p className="text-gray-600 dark:text-gray-300">
              See your accuracy, weakest topics, and session performance.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
            <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Guest Mode</h4>
            <p className="text-gray-600 dark:text-gray-300">
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
                className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {topic}
              </span>
            )
          )}
        </div>
      </section>

      <section className="bg-black dark:bg-gray-900 text-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold">Ready to start practicing?</h3>

          <p className="text-gray-300 dark:text-gray-300">
            Build confidence before your next technical interview.
          </p>

          <Link
            href="/practice"
            className="inline-block mt-6 bg-black text-white border border-gray-600 dark:bg-transparent dark:text-white dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-800 transition"
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
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
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
            <div className="hidden md:flex items-center gap-6 text-sm">

              <Link
                href="/"
                className="hover:text-gray-500 transition"
              >
                Home
              </Link>

              <Link
                href="/practice"
                className="hover:text-gray-500 transition"
              >
                Practice
              </Link>

              <Link
                href="/about"
                className="font-medium"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-gray-500 transition"
              >
                Contact
              </Link>
              {user ? (
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
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
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
            <div className="md:hidden pt-4 pb-2 border-t border-gray-200 dark:border-gray-700 mt-4 flex flex-col">

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
                className="py-3 border-b border-gray-200 dark:border-gray-700 font-medium"
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

              {user ? (
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
                    className="py-3"
                  >
                    Sign Up
                  </Link>
                </>
              )}

            </div>
          )}

        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow">
            <Image
              src="/jett-about.jpg"
              alt="Jett Wong-Parker"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium">
              Engineer & Builder of EngPrep
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Jett Wong-Parker
            </h2>

            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! My name is Jett, I built this site in order to assist engineering students 
                and new grads study engineering concepts and practice technical interviews.

                If you're here because I asked you to be, thanks :D
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              The goal is simple: help engineers strengthen core technical
              concepts, practice explaining their reasoning, and build
              confidence before interviews.
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Note: This website is completely free to use! But if you'd like to support the work: buymeacoffee.com/jettwp              
            </p>

            <div className="mt-8">
              <Link
                href="/practice"
                className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
              >
                Start Practicing
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-black text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold">Why I Made EngPrep</h3>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Software engineers have platforms like LeetCode and HackerRank, but traditional engineering
            students do not have a clear equivalent for conceptual and technical
            interview prep. EngPrep is designed to fill that gap with question
            banks, AI feedback, topic analytics, and interview-style practice.
          </p>
        </div>
      </section>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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

      {/* Navbar */}
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
                className="hover:text-gray-500 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="font-medium"
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
            className="py-3 border-b border-gray-200 dark:border-gray-700"
            >
            About
            </Link>

            <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 border-b border-gray-200 dark:border-gray-700 font-medium"
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
                className="py-3"
                >
                Sign Up
                </Link>
            </>
            )} */}

        </div>
        )}

        </div>
      </nav>

      {/* Contact Content */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 md:p-12">

            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Contact
            </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Get in touch.
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
            Have feedback about EngPrep, found a problem with a question,
            or have an idea for something that should be added? Feel free
            to reach out.
          </p>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-8">

        <h2 className="text-lg font-bold">
            Email
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
            The easiest way to get in touch is by email.
        </p>

        <a
        href="mailto:jettbusinessinquiries@gmail.com"
        className="inline-block mt-4 text-lg font-medium hover:underline"
        >
        jettbusinessinquiries@gmail.com
        </a>

        </div>

        </div>

      </section>

    </main>
  );
}
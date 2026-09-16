"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { supabase } from "../../lib/supabase";
import { Auth } from "@supabase/auth-ui-react";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");

  const authView =
    mode === "signup" ? "sign_up" : "sign_in";

  useEffect(() => {
    // If the user is already logged in, send them to Practice
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        router.push("/practice");
      }
    });

    // Listen for successful login/signup
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (
          session?.user &&
          (event === "SIGNED_IN" || event === "USER_UPDATED")
        ) {
          router.push("/practice");
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [router]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-gray-100">

      {/* Simple Login Navbar */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2">
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

          <Link
            href="/practice"
            className="text-sm hover:text-gray-500 dark:text-gray-400 transition"
          >
            Continue without an account
          </Link>

        </div>
      </nav>

      {/* Login Card */}
      <section className="max-w-lg mx-auto px-4 py-12 md:py-20">

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 md:p-10">

          <div className="text-center mb-10">

           <h1 className="text-2xl md:text-3xl font-bold">
              {mode === "signup"
                ? "Create your EngPrep account"
                : "Welcome back"}
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {mode === "signup"
                ? "Create an account to save your progress and track your performance."
                : "Sign in to continue tracking your engineering practice."}
            </p>

          </div>

            <Auth
              supabaseClient={supabase}
              view={authView}

              localization={{
                variables: {
                  sign_in: {
                    social_provider_text: "Log in with {{provider}}",
                  },
                  sign_up: {
                    social_provider_text: "Sign up with {{provider}}",
                  },
                },
              }}

              appearance={{
                style: {
                  container: {
                    width: "100%",
                  },

                  button: {
                    borderRadius: "8px",
                    padding: "12px 16px",
                    fontSize: "14px",
                  },

                  input: {
                    borderRadius: "8px",
                    padding: "12px 14px",
                    fontSize: "16px",
                  },

                  label: {
                    fontSize: "14px",
                    marginBottom: "6px",
                  },
                },

                className: {
                  button:
                    "engprep-auth-button",

                  input:
                    "engprep-auth-input",

                  label:
                    "engprep-auth-label",

                  anchor:
                    "engprep-auth-anchor",

                  divider:
                    "engprep-auth-divider",

                  message:
                    "engprep-auth-message",
                },
              }}
            />

        </div>

      </section>

    </main>
  );
}
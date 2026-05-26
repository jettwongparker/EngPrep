import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">EngPrep</h1>

          <div className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/practice">Practice</Link>
            <Link href="/about">About</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
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

            <p className="mt-6 text-gray-700 leading-relaxed">
                Hello! My name is Jett, I built this site in order to assist engineering students 
                and new grads study engineering concepts and practice technical interviews.

                If you're here because I asked you to be, thanks :D
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The goal is simple: help engineers strengthen core technical
              concepts, practice explaining their reasoning, and build
              confidence before interviews.
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
            Software engineers have platforms like LeetCode, but engineering
            students do not have a clear equivalent for conceptual and technical
            interview prep. EngPrep is designed to fill that gap with question
            banks, AI feedback, topic analytics, and interview-style practice.
          </p>
        </div>
      </section>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { questions } from "../data/questions";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Link from "next/link";
import Image from "next/image";

import "katex/dist/katex.min.css";

const topics = [
  "All",
  ...Array.from(new Set(questions.map((q) => q.topic)))
];
export default function Home() {

  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showInterview, setShowInterview] = useState(false);
  const [interviewAnswer, setInterviewAnswer] = useState("");
  const [interviewSubmitted, setInterviewSubmitted] = useState(false);
  const [aiFeedback, setAiFeedback] = useState("");
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [finished, setFinished] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [topicStats, setTopicStats] = useState<any>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);

  useEffect(() => {
    const filtered =
      selectedTopic === "All"
        ? questions
        : questions.filter(
            (q) => q.topic === selectedTopic
          );

    const shuffled = [...filtered].sort(
      () => Math.random() - 0.5
    );

    setShuffledQuestions(shuffled);

    setCurrentQuestion(0);

  }, [selectedTopic]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);

        if (session?.user) {
          loadProgress(session.user.id);
        }
      }
    );
    async function loadProgress(userId: string) {
      const { data } = await supabase
        .from("attempts")
        .select("is_correct, topic")
        .eq("user_id", userId);

      if (!data) return;

      setTotalAttempts(data.length);

      setCorrectAttempts(
        data.filter(
          (attempt) => attempt.is_correct
        ).length
      );

      const stats: any = {};

      data.forEach((attempt) => {
        if (!stats[attempt.topic]) {
          stats[attempt.topic] = {
            total: 0,
            correct: 0
          };
        }

        stats[attempt.topic].total++;

        if (attempt.is_correct) {
          stats[attempt.topic].correct++;
        }
      });

      setTopicStats(stats);
    }

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit() {
    if (!selected) return;

    setSubmitted(true);
    setAnsweredCount(answeredCount + 1);

    const isCorrect =
      selected === shuffledQuestions[currentQuestion].correct;

    if (isCorrect) {
      setScore(score + 1);
    }
        setTotalAttempts(totalAttempts + 1);

        if (isCorrect) {
          setCorrectAttempts(correctAttempts + 1);
        }
        setTopicStats((prevStats: any) => {
          const current = prevStats[shuffledQuestions[currentQuestion].topic] || {
            total: 0,
            correct: 0
          };

          return {
            ...prevStats,
            [shuffledQuestions[currentQuestion].topic]: {
              total: current.total + 1,
              correct: current.correct + (isCorrect ? 1 : 0)
            }
          };
      });
    if (user) {
      const { error } = await supabase
        .from("attempts")
        .insert([
          {
            user_id: user.id,
            question: shuffledQuestions[currentQuestion].question,
            selected_answer: selected,
            is_correct: isCorrect,
            topic: shuffledQuestions[currentQuestion].topic,
            difficulty: shuffledQuestions[currentQuestion].difficulty
          }
        ]);

      if (error) {
        console.error("Supabase insert error:", error.message);
      }
    }
  }

  async function handleInterviewSubmit() {
    setLoadingFeedback(true);
    setInterviewSubmitted(true);

    const response = await fetch("/api/grade", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question:
          shuffledQuestions[currentQuestion].question,

        answer: interviewAnswer,
      }),
    });

    const data = await response.json();

    setAiFeedback(data.feedback);
    setLoadingFeedback(false);
  }

  function handleNextQuestion() {
    if (currentQuestion + 1 >= shuffledQuestions.length) {
      setFinished(true);
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelected("");
    setSubmitted(false);
    setShowInterview(false);
    setInterviewAnswer("");
    setInterviewSubmitted(false);
    setAiFeedback("");
  }
    if (shuffledQuestions.length === 0) {
    return (
      <main className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24 md:pb-8">
          <p>Loading questions...</p>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-gray-100">
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 mb-6 md:mb-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm">

              <Link
                href="/"
                className="hover:text-gray-500 dark:text-gray-400 transition"
              >
                Home
              </Link>

              <Link
                href="/practice"
                className="font-medium"
              >
                Practice
              </Link>

              <Link
                href="/about"
                className="hover:text-gray-500 dark:text-gray-400 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-gray-500 dark:text-gray-400 transition"
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
                className="py-3 border-b border-gray-200 dark:border-gray-700 font-medium"
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
                    className="py-3 font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )}

            </div>
          )}

        </div>
      </nav>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24 md:pb-8">

      <div className="bg-black text-white rounded-2xl p-5 md:p-8 mb-6 md:mb-8 shadow-lg flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0">

        <h1 className="text-3xl md:text-5xl font-bold">
          EngPrep
        </h1>

        <p className="md:mt-3 text-sm md:text-base text-gray-300">
          AI-powered engineering interview practice
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 mb-6">

        <div className="bg-white dark:bg-gray-900 dark:bg-gray-900 rounded-xl shadow p-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Session
          </p>

          <p className="text-2xl font-bold">
            {score}/{answeredCount}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Accuracy
          </p>

          <p className="text-2xl font-bold">
            {totalAttempts > 0
              ? Math.round(
                  (correctAttempts /
                    totalAttempts) *
                  100
                )
              : 0}
            %
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Weakest Topic
          </p>

          <p className="text-lg font-bold">
            {Object.keys(topicStats).length > 0
              ? Object.entries(topicStats).sort(
                  ([, a]: any, [, b]: any) =>
                    a.correct / a.total -
                    b.correct / b.total
                )[0][0]
              : "-"}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Topics Practiced
          </p>

          <p className="text-2xl font-bold">
            {Object.keys(topicStats).length}
          </p>
        </div>

      </div>
      <div className="mt-4 mb-4 flex flex-wrap gap-2">

        {topics.map((topic) => (

          <button
            key={topic}
            onClick={() => {
              setSelectedTopic(topic);
              setCurrentQuestion(0);
              setSelected("");
              setSubmitted(false);
              setShowInterview(false);
              setInterviewAnswer("");
              setInterviewSubmitted(false);
              setAiFeedback("");
              setFinished(false);
              setScore(0);
              setAnsweredCount(0);
            }}
            className={`px-3 md:px-4 py-2 text-sm md:text-base rounded-full transition ${
              selectedTopic === topic
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
            }`}
          >
            {topic}
          </button>

        ))}

      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 md:p-8">

        {finished ? (
          <div>
            <h2 className="text-2xl font-bold">
              Session Complete
            </h2>

            <button
              onClick={() => {
                setFinished(false);
                setCurrentQuestion(0);
                setSelected("");
                setSubmitted(false);
                setShowInterview(false);
                setInterviewAnswer("");
                setInterviewSubmitted(false);
                setAiFeedback("");
                setScore(0);
                setAnsweredCount(0);
              }}
              className="mt-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Restart Session
            </button>

            <p className="mt-4 leading-relaxed">
              Final Score: {score} / {answeredCount}
            </p>
          </div>
        ) : (
          <>

        <h2 className="font-bold">
          Practice Question
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {shuffledQuestions[currentQuestion].topic} • {shuffledQuestions[currentQuestion].difficulty}
        </p>

        <p className="mt-4 leading-relaxed">
          {shuffledQuestions[currentQuestion].question}
        </p>

        <div className="mt-4 flex flex-col gap-2">

          {
            shuffledQuestions[currentQuestion].choices.map((choice: string) => (

            <button
              key={choice}
              onClick={() => setSelected(choice[0])}
              className={`border border-gray-200 dark:border-gray-700 p-3 rounded-lg transition text-left w-full md:hover:scale-[1.01] hover:shadow ${
                selected === choice[0]
                  ? "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                  : "bg-white text-black dark:bg-gray-900 dark:text-white"
              }`}
            >
              {choice}
            </button>

                ))}
              </div>

            </>
          )}

    

          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selected}
              className={`mt-4 px-4 py-2 rounded border transition ${
                selected
                  ? "bg-black text-white border-black dark:bg-gray-700 dark:text-white dark:border-gray-600 hover:bg-gray-800 dark:hover:bg-gray-600"
                  : "bg-gray-300 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:border-gray-700 cursor-not-allowed"
              }`}
            >
              Submit
            </button>

        ) : (

          <div className="mt-6">

            <h3 className="font-bold">

              {selected === shuffledQuestions[currentQuestion].correct
                ? "✓ Correct"
                : "✗ Incorrect"}

            </h3>

            <p className="mt-2">

                {shuffledQuestions[currentQuestion].explanation}

            </p>

          <div className="mt-4 flex flex-col md:flex-row gap-3 md:gap-4">

            <button
              onClick={() => setShowInterview(true)}
              className="w-full md:w-auto border border-gray-200 dark:border-gray-700 px-4 py-3 md:py-2 rounded"
            >
              Practice AI Interview Answer (Optional)
            </button>

            <button
              onClick={handleNextQuestion}
              className="w-full md:w-auto bg-black text-white px-4 py-3 md:py-2 rounded"
            >
              Next Question
            </button>

          </div>

            {showInterview && (

              <div className="mt-6">

                <h3 className="font-bold">
                  AI Interview Practice
                </h3>

                <textarea
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 rounded-lg mt-2"
                  rows={4}
                  placeholder="Explain your reasoning as if you were in an interview..."
                  value={interviewAnswer}
                  onChange={(e) =>
                    setInterviewAnswer(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      !e.shiftKey &&
                      interviewAnswer.trim()
                    ) {
                      e.preventDefault();
                      handleInterviewSubmit();
                    }
                  }}
                />

                <button
                  onClick={handleInterviewSubmit}
                  className="mt-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white text-black dark:bg-transparent dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Interview Response
                </button>

              </div>

            )}

            {interviewSubmitted && (

              <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded p-4">

                <h3 className="font-bold">
                  Your Response
                </h3>

                <p className="mt-2">
                  {interviewAnswer}
                </p>

              {loadingFeedback ? (
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>

                  <span>
                    AI reviewing answer...
                  </span>
                </div>
              ) : (
                <div className="mt-4 prose max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                  >
                    {aiFeedback}
                  </ReactMarkdown>
                </div>
              )}

              </div>

            )}

          </div>

        )}

      </div>
    </div>
    </main>
  );
}
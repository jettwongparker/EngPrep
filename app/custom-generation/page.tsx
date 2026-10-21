"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

type Difficulty = "Easy" | "Medium" | "Hard" | "Mixed";

type PracticeQuestion = {
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  choices: string[];
  correct: "A" | "B" | "C" | "D";
  explanation: string;
};

export default function AIPracticePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("Medium");
  const [activeTopic, setActiveTopic] = useState("");
  const [questionSet, setQuestionSet] = useState<PracticeQuestion[]>([]);
  const [generating, setGenerating] = useState(false);
  const [generationError, setGenerationError] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showInterview, setShowInterview] = useState(false);
  const [interviewAnswer, setInterviewAnswer] = useState("");
  const [interviewSubmitted, setInterviewSubmitted] = useState(false);
  const [aiFeedback, setAiFeedback] = useState("");
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const requestController = useRef<AbortController | null>(null);

  const currentQuestion = questionSet[questionIndex];

  function resetSession() {
    setQuestionIndex(0);
    setSelected("");
    setSubmitted(false);
    setScore(0);
    setFinished(false);
    setShowInterview(false);
    setInterviewAnswer("");
    setInterviewSubmitted(false);
    setAiFeedback("");
    setLoadingFeedback(false);
  }

  async function handleGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (generating || !topic.trim()) return;

    // Keep the previous session if generation fails.
    const controller = new AbortController();
    requestController.current?.abort();
    requestController.current = controller;
    setGenerating(true);
    setGenerationError("");

    try {
      const response = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), difficulty }),
        signal: controller.signal,
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to generate questions.");
      }
      if (!Array.isArray(data.questions) || data.questions.length !== 10) {
        throw new Error("The AI returned an incomplete set. Please try again.");
      }

      setQuestionSet(data.questions as PracticeQuestion[]);
      setActiveTopic(topic.trim());
      resetSession();
    } catch (error) {
      if (!controller.signal.aborted) {
        setGenerationError(
          error instanceof Error ? error.message : "Unable to generate questions."
        );
      }
    } finally {
      if (requestController.current === controller) {
        setGenerating(false);
        requestController.current = null;
      }
    }
  }

  function handleSubmit() {
    if (!selected || !currentQuestion || submitted || finished) return;
    setSubmitted(true);
    if (selected === currentQuestion.correct) {
      setScore((previous) => previous + 1);
    }
  }

  function handleNext() {
    if (questionIndex + 1 >= questionSet.length) {
      setFinished(true);
    } else {
      setQuestionIndex((previous) => previous + 1);
      setSelected("");
      setSubmitted(false);
      setShowInterview(false);
      setInterviewAnswer("");
      setInterviewSubmitted(false);
      setAiFeedback("");
      setLoadingFeedback(false);
    }
  }

  async function handleInterviewSubmit() {
    if (!currentQuestion || !interviewAnswer.trim() || loadingFeedback) return;
    setInterviewSubmitted(true);
    setLoadingFeedback(true);
    setAiFeedback("");
    try {
      const response = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: currentQuestion.question,
          answer: interviewAnswer,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not grade your response.");
      setAiFeedback(data.feedback || "No feedback was returned.");
    } catch (error) {
      setAiFeedback(error instanceof Error ? error.message : "Unable to get AI feedback.");
    } finally {
      setLoadingFeedback(false);
    }
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
                href="/custom-generation"
                className="font-semibold"
              >
                Custom Generation
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
                href="/custom-generation"
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-gray-200 dark:border-gray-700 font-semibold"
              >
                Custom Generation
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

            </div>
          )}

        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24 md:pb-8">
        <div className="bg-black text-white rounded-2xl p-5 md:p-8 mb-6 md:mb-8 shadow-lg flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0">
          <h1 className="text-3xl md:text-5xl font-bold">Custom Generation</h1>
          <p className="md:mt-3 text-sm md:text-base text-gray-300">
            Generate original engineering questions about any topic.
          </p>
        </div>

        <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 md:p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold">Create a custom practice set</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Choose an engineering topic and difficulty. AI will write 10 new multiple-choice questions. Only limited to 3 per day for now.
          </p>
          <form onSubmit={handleGenerate} className="mt-4 flex flex-col gap-3">
            <div>
              <label htmlFor="ai-topic" className="block text-sm font-medium mb-1">Engineering topic</label>
              <input
                id="ai-topic"
                type="text"
                maxLength={200}
                required
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                placeholder="e.g. Kalman filtering, stress and strain, circuits, etc."
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="ai-difficulty" className="block text-sm font-medium mb-1">Difficulty</label>
              <select
                id="ai-difficulty"
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value as Difficulty)}
                className="w-full md:w-48 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white p-3"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                <option value="Mixed">Mixed</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={generating || !topic.trim()}
              className="w-full md:w-auto self-start rounded-lg px-5 py-3 bg-black text-white dark:bg-gray-700 dark:text-white border border-black dark:border-gray-600 hover:bg-gray-800 dark:hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {generating ? "Generating 10 questions..." : questionSet.length ? "Generate New Set" : "Generate 10 Questions"}
            </button>
            {generating && (
              <p role="status" className="text-sm text-gray-600 dark:text-gray-400">Creating your questions. This may take a few seconds...</p>
            )}
            {generationError && (
              <p role="alert" className="text-sm text-red-600 dark:text-red-400">{generationError}</p>
            )}
          </form>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            Note: AI-generated questions may contain inaccuracies!
          </p>
        </section>

        {questionSet.length > 0 && (
          <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 md:p-8">
            {finished ? (
              <div>
                <h2 className="text-2xl font-bold">Session Complete</h2>
                <p className="mt-4 leading-relaxed">Final Score: {score} / {questionSet.length} ({Math.round((score / questionSet.length) * 100)}%)</p>
                <button
                  onClick={resetSession}
                  className="mt-4 px-4 py-2 rounded bg-black text-white dark:bg-gray-700 dark:text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition"
                >
                  Practice This Set Again
                </button>
              </div>
            ) : currentQuestion ? (
              <>
                <div className="flex flex-col md:flex-row md:justify-between gap-1">
                  <h2 className="font-bold">Question {questionIndex + 1} of {questionSet.length}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activeTopic} • {currentQuestion.difficulty} • Score: {score}/{questionIndex + (submitted ? 1 : 0)}
                  </p>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-4 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full transition-all" style={{ width: `${((questionIndex + (submitted ? 1 : 0)) / questionSet.length) * 100}%` }} />
                </div>
                <p className="mt-5 leading-relaxed">{currentQuestion.question}</p>
                <div className="mt-4 flex flex-col gap-2">
                  {currentQuestion.choices.map((choice, index) => {
                    const letter = "ABCD"[index];
                    return (
                      <button
                        type="button"
                        key={`${questionIndex}-${letter}`}
                        disabled={submitted}
                        onClick={() => setSelected(letter)}
                        className={`border border-gray-200 dark:border-gray-700 p-3 rounded-lg transition text-left w-full md:hover:scale-[1.01] hover:shadow disabled:cursor-default ${
                          selected === letter
                            ? "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                            : "bg-white text-black dark:bg-gray-900 dark:text-white"
                        }`}
                      >
                        {choice}
                      </button>
                    );
                  })}
                </div>
                {!submitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!selected}
                    className={`mt-4 px-4 py-2 rounded border transition ${selected
                      ? "bg-black text-white border-black dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-800 dark:hover:bg-gray-600"
                      : "bg-gray-300 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:border-gray-700 cursor-not-allowed"
                    }`}
                  >
                    Submit
                  </button>
                ) : (
                  <div className="mt-6">
                    <h3 className="font-bold">
                      {selected === currentQuestion.correct ? "✓ Correct" : "✗ Incorrect"}
                    </h3>
                    <div className="mt-2 leading-relaxed">
                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                        {currentQuestion.explanation}
                      </ReactMarkdown>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row gap-3 md:gap-4">
                      <button
                        type="button"
                        onClick={() => setShowInterview(true)}
                        className="w-full md:w-auto border border-gray-200 dark:border-gray-700 px-4 py-3 md:py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                      >
                        Practice AI Interview Answer (Optional)
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-full md:w-auto bg-black text-white dark:bg-gray-700 dark:text-white px-4 py-3 md:py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition"
                      >
                        {questionIndex + 1 === questionSet.length ? "Finish Session" : "Next Question"}
                      </button>
                    </div>
                    {showInterview && (
                      <div className="mt-6">
                        <h3 className="font-bold">AI Interview Practice</h3>
                        <textarea
                          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 rounded-lg mt-2"
                          rows={4}
                          placeholder="Explain your reasoning as if you were in an interview..."
                          value={interviewAnswer}
                          onChange={(event) => setInterviewAnswer(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" && !event.shiftKey && interviewAnswer.trim()) {
                              event.preventDefault();
                              void handleInterviewSubmit();
                            }
                          }}
                        />
                        <button
                          type="button"
                          disabled={!interviewAnswer.trim() || loadingFeedback}
                          onClick={handleInterviewSubmit}
                          className="mt-4 px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white text-black dark:bg-transparent dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loadingFeedback ? "Reviewing..." : "Submit Interview Response"}
                        </button>
                      </div>
                    )}
                    {interviewSubmitted && (
                      <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded p-4">
                        <h3 className="font-bold">Your Response</h3>
                        <p className="mt-2 whitespace-pre-wrap">{interviewAnswer}</p>
                        {loadingFeedback ? (
                          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">AI reviewing answer...</p>
                        ) : (
                          <div className="mt-4 prose dark:prose-invert max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {aiFeedback}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : null}
          </section>
        )}
      </div>
    </main>
  );
}

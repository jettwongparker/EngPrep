"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { questions } from "./data/questions";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

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
  const [isGuest, setIsGuest] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [topicStats, setTopicStats] = useState<any>({});

  const filteredQuestions =
  selectedTopic === "All"
    ? questions
    : questions.filter(
        (q) => q.topic === selectedTopic
      );

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
      selected === filteredQuestions[currentQuestion].correct;

    if (isCorrect) {
      setScore(score + 1);
    }
        setTotalAttempts(totalAttempts + 1);
        
        if (isCorrect) {
          setCorrectAttempts(correctAttempts + 1);
        }
        setTopicStats((prevStats: any) => {
          const current = prevStats[filteredQuestions[currentQuestion].topic] || {
            total: 0,
            correct: 0
          };

          return {
            ...prevStats,
            [filteredQuestions[currentQuestion].topic]: {
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
            question: filteredQuestions[currentQuestion].question,
            selected_answer: selected,
            is_correct: isCorrect,
            topic: filteredQuestions[currentQuestion].topic,
            difficulty: filteredQuestions[currentQuestion].difficulty
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
          filteredQuestions[currentQuestion].question,

        answer: interviewAnswer,
      }),
    });

    const data = await response.json();

    setAiFeedback(data.feedback);
    setLoadingFeedback(false);
  }

  function handleNextQuestion() {
    if (currentQuestion + 1 >= filteredQuestions.length) {
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
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">

      <div className="bg-black text-white rounded-2xl p-8 mb-8 shadow-lg flex justify-between items-start">

        <h1 className="text-5xl font-bold">
          EngPrep by Jett
        </h1>

        <p className="mt-3 text-gray-300">
          AI-powered engineering interview practice
        </p>

      </div>

      {!user && !isGuest ? (
        <div className="mt-8 max-w-md w-full">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
          />

          <button
            onClick={() => setIsGuest(true)}
            className="mt-4 w-full border px-4 py-2 rounded"
          >
            Continue as Guest
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            supabase.auth.signOut();
            setIsGuest(false);
          }}
          className="mt-4 border px-4 py-2 rounded"
        >
          {isGuest ? "Exit Guest Mode" : "Log out"}
        </button>
      )}
    {(user || isGuest) && (
      <>
      <div className="grid grid-cols-4 gap-4 mt-6 mb-6">

        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-gray-500 text-sm">
            Session
          </p>

          <p className="text-2xl font-bold">
            {score}/{answeredCount}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-gray-500 text-sm">
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

        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-gray-500 text-sm">
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

        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-gray-500 text-sm">
            Topics Practiced
          </p>

          <p className="text-2xl font-bold">
            {Object.keys(topicStats).length}
          </p>
        </div>

      </div>
      <div className="mt-4 flex gap-2">

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
            className={`px-4 py-2 rounded-full transition ${
              selectedTopic === topic
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {topic}
          </button>

        ))}

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">

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
              className="mt-4 bg-black text-white px-4 py-2 rounded"
            >
              Restart Session
            </button>

            <p className="mt-4">
              Final Score: {score} / {answeredCount}
            </p>
          </div>
        ) : (
          <>

        <h2 className="font-bold">
          Practice Question
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          {filteredQuestions[currentQuestion].topic} • {filteredQuestions[currentQuestion].difficulty}
        </p>

        <p className="mt-4">
          {filteredQuestions[currentQuestion].question}
        </p>

        <div className="mt-4 flex flex-col gap-2">

          {
            filteredQuestions[currentQuestion].choices.map((choice) => (

            <button
              key={choice}
              onClick={() => setSelected(choice[0])}
              className={`border p-3 rounded-lg transition hover:scale-[1.01] hover:shadow ${
                selected === choice[0]
                  ? "bg-gray-200"
                  : "bg-white"
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
            className={`mt-4 px-4 py-2 rounded ${
              selected
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit
          </button>

        ) : (

          <div className="mt-6">

            <h3 className="font-bold">

              {selected === filteredQuestions[currentQuestion].correct
                ? "✓ Correct"
                : "✗ Incorrect"}

            </h3>

            <p className="mt-2">

                {filteredQuestions[currentQuestion].explanation}

            </p>

            <button
              onClick={() => setShowInterview(true)}
              className="mt-4 border px-4 py-2 rounded"
            >
              Practice AI Interview Answer (Optional)
            </button>

            <button
              onClick={handleNextQuestion}
              className="mt-4 ml-4 bg-black text-white px-4 py-2 rounded"
            >
              Next Question
            </button>

            {showInterview && (

              <div className="mt-6">

                <h3 className="font-bold">
                  AI Interview Practice
                </h3>

                <textarea
                  className="w-full border p-2 rounded mt-2"
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
                  className="mt-4 bg-black text-white px-4 py-2 rounded"
                >
                  Submit Interview Response
                </button>

              </div>

            )}

            {interviewSubmitted && (

              <div className="mt-4 border rounded p-4">

                <h3 className="font-bold">
                  Your Response
                </h3>

                <p className="mt-2">
                  {interviewAnswer}
                </p>

              {loadingFeedback ? (
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
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
      </>
    )}
    </div>
    </main>
  );
}
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Bot,
  BookOpen,
  BarChart3,
} from "lucide-react";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D1117] text-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 opacity-20 blur-[120px]" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 opacity-20 blur-[120px]" />

      {/* Navbar */}

      <nav className="relative z-10 flex justify-between items-center px-10 py-6">

        <h1 className="text-3xl font-bold">
          ✨ AI Diary
        </h1>

        <div className="flex gap-4">

          <button
            onClick={() => navigate("/login")}
            className="
              px-5 py-2
              rounded-xl
              border border-gray-700
              hover:border-purple-500
            "
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="
              bg-purple-600
              px-5 py-2
              rounded-xl
              hover:bg-purple-700
            "
          >
            Register
          </button>

        </div>

      </nav>

      {/* Hero */}

      <section className="relative z-10 text-center px-6 py-32">

        <h1
          className="
            text-6xl
            md:text-7xl
            font-bold
            leading-tight
          "
        >
          Your AI Powered
          <br />

          <span className="text-purple-400">
            Personal Diary
          </span>

        </h1>

        <p
          className="
            mt-8
            text-xl
            text-gray-400
            max-w-3xl
            mx-auto
          "
        >
          Capture memories, understand emotions,
          chat with your AI companion and visualize
          your emotional journey.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="
            mt-10
            bg-purple-600
            px-8
            py-4
            rounded-2xl
            text-lg
            hover:bg-purple-700
          "
        >
          Get Started Free 🚀
        </button>

      </section>

      {/* Features */}

      <section className="relative z-10 px-10 py-20">

        <h2 className="text-4xl font-bold text-center mb-16">

          Powerful Features

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-[#161B22] p-6 rounded-3xl">
            <BookOpen size={40} />
            <h3 className="text-xl font-semibold mt-4">
              Smart Diary
            </h3>

            <p className="text-gray-400 mt-2">
              Write and store memories securely.
            </p>
          </div>

          <div className="bg-[#161B22] p-6 rounded-3xl">
            <Brain size={40} />
            <h3 className="text-xl font-semibold mt-4">
              Mood Detection
            </h3>

            <p className="text-gray-400 mt-2">
              AI analyzes emotions in your entries.
            </p>
          </div>

          <div className="bg-[#161B22] p-6 rounded-3xl">
            <Bot size={40} />
            <h3 className="text-xl font-semibold mt-4">
              AI Companion
            </h3>

            <p className="text-gray-400 mt-2">
              Talk with a personalized AI assistant.
            </p>
          </div>

          <div className="bg-[#161B22] p-6 rounded-3xl">
            <BarChart3 size={40} />
            <h3 className="text-xl font-semibold mt-4">
              Analytics
            </h3>

            <p className="text-gray-400 mt-2">
              Track emotions and patterns over time.
            </p>
          </div>

        </div>

      </section>

      {/* How It Works */}

      <section className="px-10 py-20 text-center">

        <h2 className="text-4xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-2xl font-bold">
              1️⃣ Write
            </h3>

            <p className="text-gray-400 mt-3">
              Record thoughts, experiences and memories.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              2️⃣ Analyze
            </h3>

            <p className="text-gray-400 mt-3">
              AI detects emotions and mood patterns.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              3️⃣ Grow
            </h3>

            <p className="text-gray-400 mt-3">
              Understand yourself through insights.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="text-center py-24">

        <h2 className="text-5xl font-bold">

          Start Your Journey Today

        </h2>

        <p className="text-gray-400 mt-6">

          Let AI help you reflect,
          understand and improve.

        </p>

        <button
          onClick={() => navigate("/register")}
          className="
            mt-8
            bg-purple-600
            px-8
            py-4
            rounded-2xl
            hover:bg-purple-700
          "
        >
          Create Account
        </button>

      </section>

      {/* Footer */}

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">

        © 2026 AI Diary · Powered by Gemini AI

      </footer>

    </div>
  );
}
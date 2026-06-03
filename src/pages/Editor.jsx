import { ArrowLeft } from "lucide-react";

export default function Editor() {
  return (
    <div className="p-8 text-white max-w-4xl">

      <button className="flex items-center gap-2 text-gray-400 hover:text-white">
        <ArrowLeft size={18} />
        Back
      </button>

      <input
        type="text"
        placeholder="Title"
        className="
          mt-6
          w-full
          bg-transparent
          text-4xl
          font-bold
          outline-none
        "
      />

      <textarea
        placeholder="Write your thoughts..."
        className="
          mt-8
          w-full
          h-72
          bg-[#161B22]
          rounded-3xl
          p-6
          resize-none
          outline-none
        "
      />

      <div className="mt-6 flex gap-3">
        <button className="bg-purple-600 px-5 py-3 rounded-xl">
          Analyze Mood
        </button>

        <button className="bg-[#161B22] px-5 py-3 rounded-xl">
          Save Entry
        </button>
      </div>

    </div>
  );
}
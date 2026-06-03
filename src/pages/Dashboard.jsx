import { Search } from "lucide-react";
import DiaryCard from "../components/DiaryCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // const notes = [
  //   {
  //     title: "Productive Day",
  //     mood: "😊",
  //     date: "28 May",
  //   },
  //   {
  //     title: "Random Thoughts",
  //     mood: "😐",
  //     date: "27 May",
  //   },
  //   {
  //     title: "Feeling Stressed",
  //     mood: "😔",
  //     date: "26 May",
  //   },
  // ];

  const navigate = useNavigate();

  const notes = [
  {
    mood: "😊",
    title: "Productive Day",
    preview:
      "Completed my ML project and integrated Flask APIs successfully.",
    date: "28 May",
  },

  {
    mood: "😐",
    title: "Random Thoughts",
    preview:
      "Thinking about future plans, career goals and improving the AI diary.",
    date: "27 May",
  },

  {
    mood: "😔",
    title: "Feeling Stressed",
    preview:
      "Project deadlines are approaching and there is still work left.",
    date: "26 May",
  },
];

  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-6">
      <h1 className="text-4xl font-bold">
        Good Evening 👋
      </h1>

      <p className="text-gray-400 mt-2">
        378 Memories
      </p>

      
  <div className="bg-[#161B22] rounded-2xl p-4">
    <p className="text-gray-400">Mood</p>
    <h2 className="text-2xl font-bold">😊</h2>
      </div>
      
      <br></br>
  <div className="bg-[#161B22] rounded-2xl p-4">
    <p className="text-gray-400">Streak</p>
    <h2 className="text-2xl font-bold">7 Days</h2>
  </div>

      <div className="mt-6 flex items-center bg-[#161B22] rounded-xl px-4 py-3">
        <Search size={18} />
        <input  
          className="bg-transparent outline-none ml-3 w-full"
          placeholder="Search memories..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
  {notes.map((note, index) => (
    <DiaryCard
      key={index}
      mood={note.mood}
      title={note.title}
      preview={note.preview}
      date={note.date}
    />
  ))}
</div>

      <button
        onClick={() => navigate("/editor")}
        className="
        fixed
        bottom-8
        right-8
        w-16
        h-16
        rounded-full
        bg-purple-600
        text-2xl
        shadow-lg
        cursor-pointer
        "
      >
        ✨
      </button>
    </div>
  );
}
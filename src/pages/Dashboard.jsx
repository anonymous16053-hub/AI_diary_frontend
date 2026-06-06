import { Search } from "lucide-react";
import DiaryCard from "../components/DiaryCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
const [selectedMood, setSelectedMood] =  useState("All");
const [notes, setNotes] = useState([]);
const [loading, setLoading] = useState(true);
const [searchTerm, setSearchTerm] = useState("");
const navigate = useNavigate();

useEffect(() => {
async function loadEntries() {
try {
const userId = localStorage.getItem("user_id");

if (!userId) {
      navigate("/login");
      return;
    }

    const response = await API.get(`/history/${userId}`);
    console.log("HISTORY DATA:", response.data);
    setNotes(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
  }
  

loadEntries();


}, [navigate]);

  if (loading) {
  
return ( <div className="text-white p-8">
Loading entries... </div>
);
  }

  const filteredNotes = notes.filter((entry) => {
    
  const matchesText =
    entry.text
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      );

  const matchesMood =
    selectedMood === "All" ||
    entry.mood === selectedMood;

  return (
    matchesText &&
    matchesMood
  );
});
  
return ( <div className="min-h-screen bg-[#0D1117] text-white p-6"> <h1 className="text-4xl font-bold">
Good Evening 👋 </h1>


  <p className="text-gray-400 mt-2">
    {notes.length} Memories
  </p>

  <div className="mt-6 flex items-center bg-[#161B22] rounded-xl px-4 py-3">
    <Search size={18} />

  <input
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
  className="bg-transparent outline-none ml-3 w-full"
  placeholder="Search memories..."
    />
    
  </div>
<select
  value={selectedMood}
  onChange={(e) =>
    setSelectedMood(e.target.value)
  }
  className="
    mt-4
    bg-[#161B22]
    p-3
    rounded-xl
  "
>
  <option>All</option>
  <option>Happy</option>
  <option>Sad</option>
  <option>Angry</option>
  <option>Excited</option>
  <option>Anxious</option>
  <option>Lonely</option>
  <option>Grateful</option>
  <option>Confused</option>
  <option>Neutral</option>
</select>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
    {filteredNotes.map((entry, index) => (
      <DiaryCard
        key={index}
        preview={entry.text}
        title={entry.title}
        mood={entry.mood}
        date={entry.date}
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

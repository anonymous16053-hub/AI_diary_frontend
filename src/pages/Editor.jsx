import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

export default function Editor() {

const navigate = useNavigate();

const [title, setTitle] = useState("");
const [entry, setEntry] = useState("");
const [mood, setMood] = useState("");

async function saveEntry() {


const userId =
  localStorage.getItem("user_id");

if (!entry.trim()) {
  alert("Please write something");
  return;
}

try {

  const response =
    await API.post("/save", {
      user_id: userId,
      entry: entry
    });

  if (response.data.mood) {
    setMood(response.data.mood);
  }

  alert(
    response.data.message ||
    "Entry saved"
  );

} catch (error) {

  console.log(error);

  alert("Failed to save entry");
}


}

return ( <div className="max-w-5xl mx-auto p-8 text-white">


  <button
    onClick={() => navigate("/")}
    className="
      flex
      items-center
      gap-2
      text-gray-400
      hover:text-white
      mb-6
    "
  >
    <ArrowLeft size={18} />
    Back
  </button>

  <input
    value={title}
    onChange={(e) =>
      setTitle(e.target.value)
    }
    placeholder="Entry Title"
    className="
      w-full
      bg-transparent
      text-4xl
      font-bold
      outline-none
      mb-6
    "
  />

  <textarea
    value={entry}
    onChange={(e) =>
      setEntry(e.target.value)
    }
    placeholder="Write your thoughts..."
    className="
      w-full
      h-[350px]
      bg-[#161B22]
      rounded-3xl
      p-6
      resize-none
      outline-none
    "
  />

  {mood && (

    <div
      className="
        mt-6
        bg-[#161B22]
        p-4
        rounded-2xl
      "
    >
      <h3 className="font-semibold">
        Mood Analysis
      </h3>

      <p className="text-purple-400 mt-2">
        {mood}
      </p>
    </div>

  )}

  <div className="mt-6">

    <button
      onClick={saveEntry}
      className="
        flex
        items-center
        gap-2
        bg-purple-600
        px-6
        py-3
        rounded-xl
      "
    >
      <Save size={18} />
      Save Entry
    </button>

  </div>

</div>


);
}

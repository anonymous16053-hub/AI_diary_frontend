import { Save,Trash2 } from "lucide-react";
import { useState,useEffect } from "react";
import API from "../services/api";
import {useNavigate,useParams} from "react-router-dom";

export default function Diary() {

  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  useEffect(() => {
    if (!id) return;

    async function loadEntry() {

      try {
        const response = await API.get(`/entry/${id}`);

        setTitle(response.data.title);
        setEntry(response.data.text);
        setDate(response.data.date);
        setMood(response.data.mood);
      } catch (error) {
        console.log(error);
        alert("Failed to load entry");
      }
    } loadEntry();
  }, [id]);

// async function saveEntry() {
  

// const userId =
//   localStorage.getItem("user_id");

// if (!entry.trim()) {
//   alert("Please write something");
//   return;
// }

// try {

//   const response =
//     await API.post("/save", {
//       title: title || "Untitled",
//       user_id: userId,
//       entry: entry
//     });

//   if (response.data.mood) {
//     setMood(response.data.mood);
//   }

//   alert(
//     response.data.message ||
//     "Entry saved"
//   );

// } catch (error) {

//   console.log(error);

//   alert("Failed to save entry");
// }


// }
async function saveEntry() {
  try {

    if (isEditMode) {

      await API.put(
        `/entry/${id}`,
        {
          title,
          text: entry,
        }
      );

      alert("Updated");

    } else {

      const response =
        await API.post("/save", {
          title:
            title ||
            "Untitled",

          user_id:
            localStorage.getItem(
              "user_id"
            ),

          entry,
        });

      setDate(
        response.data.date
      );
      setMood(
        response.data.mood
      );

      alert(
        response.data.message
      );
    }

  } catch (error) {
    console.log(error);
  }
  }
  
async function deleteEntry() {

  if (
    !window.confirm(
      "Delete this entry?"
    )
  )
    return;

  try {

    await API.delete(
      `/entry/${id}`
    );

    navigate("/dashboard");

  } catch (error) {
    console.log(error);
  }
  }
  
return ( <div className="max-w-5xl mx-auto p-8 text-white">


  {/* <button
    onClick={() => navigate("/dashboard")}
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
  </button> */}
  <div className="mt-6 flex items-start ">
  
  <input
    value={title}
    onChange={(e) =>
      setTitle(e.target.value)
    }
    placeholder="Entry Title"
    className="
      w-5/6
      bg-transparent
      text-4xl
      font-bold
      outline-none
      mb-6
    "
  />
 {date && (
      <p className="text-white-400 mt-2">
       Date:- {date}
      </p>
  )}
 </div>

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

  <div className="mt-6 flex items-start ">

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
      Save Note
    </button>
    {isEditMode && (

      <button
       onClick={deleteEntry}
        className="
      flex
      items-center
      gap-2
        ml-4
        bg-red-600
        px-6
        py-3
        rounded-xl
      "
      >
        <Trash2 size={18} />
        Delete Note
      </button>
    )}
    

  </div>

</div>


);
}
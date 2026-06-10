import { useNavigate } from "react-router-dom";


// export default function DiaryCard({
//   title,
//   mood,
//   preview,
//   date,
// }) {
//   const navigate = useNavigate();
//   return (
//     <div
//     onClick={() => navigate("/editor")}
//     className="
//     bg-[#161B22]
//       rounded-3xl
//       p-6
//       hover:bg-[#1c2330]
//       transition
//       cursor-pointer
//       "
//     >
//       <div className="text-4xl mb-4">
//         {title}
//       </div>

//       <p className="text-2xl ">
//         {mood}
//       </p>

//       <p className="text-gray-400 mt-3 line-clamp-3">
//         {preview}
//       </p>

//       <div className="mt-5 text-sm text-gray-500">
//         {date}
//       </div>
//     </div>
//   );
// }

export default function DiaryCard({
  id,
  title,
  mood,
  preview,
  date,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/diary/${id}`)}
      className="
        glass
        rounded-3xl
        p-6
        cursor-pointer
        hover:scale-[1.02]
        transition-all
        duration-300
      "
    >
      <h3 className="text-xl font-bold">
        {title || "Untitled"}
      </h3>

      <p className="text-sm text-purple-400 mt-2">
        {mood}
      </p>

      <p className="mt-4 opacity-80 line-clamp-3">
        {preview}
      </p>

      <p className="mt-4 text-xs opacity-60">
        {date}
      </p>
    </div>
  );
}
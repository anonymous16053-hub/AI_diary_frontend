import { useNavigate } from "react-router-dom";


export default function DiaryCard({
  mood,
  title,
  preview,
  date,
}) {
  const navigate = useNavigate();
  return (
    <div
    onClick={() => navigate("/editor")}
    className="
    bg-[#161B22]
      rounded-3xl
      p-6
      hover:bg-[#1c2330]
      transition
      cursor-pointer
      "
    >
      <div className="text-4xl mb-4">
        {mood}
      </div>

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-400 mt-3 line-clamp-3">
        {preview}
      </p>

      <div className="mt-5 text-sm text-gray-500">
        {date}
      </div>
    </div>
  );
}
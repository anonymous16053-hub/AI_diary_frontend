import {
  Home,
  BookOpen,
  Bot,
  Smile,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Diary", path: "/diary", icon: BookOpen },
    { name: "AI Chat", path: "/chat", icon: Bot },
    { name: "Mood", path: "/mood", icon: Smile },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#161B22] border-r border-gray-800 p-6">
      <h1 className="text-2xl font-bold text-white mb-10">
        ✨ AI Diary
      </h1>

      <div className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                px-4 py-3
                rounded-xl
                transition
                ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:bg-[#21262D] hover:text-white"
                }
                `
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
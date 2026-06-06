import {
  // Home,
  BookOpen,
  Bot,
  Smile,
  Settings,
  Activity,
  LogOut,
  LucideLayoutDashboard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();


  const handleLogout = () => {

    localStorage.clear();

    navigate("/");
};
  const menuItems = [
    // { name: "Home", path: "/", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: LucideLayoutDashboard },
    { name: "Diary", path: "/diary", icon: BookOpen },
    { name: "AI Chat", path: "/chat", icon: Bot },
    { name: "Mood", path: "/mood", icon: Smile },
    // { name: "Thoughts", path: "/editor", icon: Brain },
    { name: "Analysis", path: "/analytics", icon: Activity },
    { name: "Settings", path: "/settings", icon: Settings },
    {name: "Logout",action:handleLogout , path: "/", icon: LogOut },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#161B22] border-r border-gray-800 p-6">
      <h1 className="text-2xl font-bold text-white mb-10">
        ✨ AI Diary
      </h1>

      <div className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

      
          // <NavLink
          //   key={item.name}
          //   to={item.path}
          //   className={({ isActive }) =>
          //     `
          //     flex items-center gap-3
          //     px-4 py-3
          //     rounded-xl
          //     transition
          //     ${
          //       isActive
          //         ? "bg-purple-600 text-white"
          //         : "text-gray-400 hover:bg-[#21262D] hover:text-white"
          //     }
          //     `
          //   }
          // >
          //   <Icon size={20} />
          //   {item.name}
          // </NavLink>

          return item.action ? (

            <button
              key={item.name}
              onClick={item.action}
              className="
      w-full
      flex items-center gap-3
      px-4 py-3
      rounded-xl
      text-gray-400
      hover:bg-[#21262D]
      hover:text-white
      transition
    "
            >
              <Icon size={20} />
              {item.name}
            </button>

          ) : (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
      flex items-center gap-3
      px-4 py-3
      rounded-xl
      transition
      ${isActive
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
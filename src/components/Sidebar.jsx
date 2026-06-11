// import {
//   // Home,
//   BookOpen,
//   Bot,
//   Smile,
//   Settings,
//   Activity,
//   LogOut,
//   LucideLayoutDashboard,
//   Menu,
//   X,
//   Sun,
//   Moon
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   const handleLogout = () => {

//     localStorage.clear();

//     navigate("/");
// };
//   const menuItems = [
//     // { name: "Home", path: "/", icon: Home },
//     { name: "Dashboard", path: "/dashboard", icon: LucideLayoutDashboard },
//     { name: "Diary", path: "/diary", icon: BookOpen },
//     { name: "AI Chat", path: "/chat", icon: Bot },
//     { name: "Mood", path: "/mood", icon: Smile },
//     // { name: "Thoughts", path: "/editor", icon: Brain },
//     { name: "Analysis", path: "/analytics", icon: Activity },
//     { name: "Settings", path: "/settings", icon: Settings },
//     {name: "Logout",action:handleLogout , path: "/", icon: LogOut },
//   ];

//   return (
//     <div className="w-64 min-h-screen bg-[#161B22] border-r border-gray-800 p-6">
//       <h1 className="text-2xl font-bold text-white mb-10">
//         ✨ AI Diary
//       </h1>

//       <div className="space-y-3">
//         {menuItems.map((item) => {
//           const Icon = item.icon;

      
//           // <NavLink
//           //   key={item.name}
//           //   to={item.path}
//           //   className={({ isActive }) =>
//           //     `
//           //     flex items-center gap-3
//           //     px-4 py-3
//           //     rounded-xl
//           //     transition
//           //     ${
//           //       isActive
//           //         ? "bg-purple-600 text-white"
//           //         : "text-gray-400 hover:bg-[#21262D] hover:text-white"
//           //     }
//           //     `
//           //   }
//           // >
//           //   <Icon size={20} />
//           //   {item.name}
//           // </NavLink>

//           return item.action ? (

//             <button
//               key={item.name}
//               onClick={item.action}
//               className="
//       w-full
//       flex items-center gap-3
//       px-4 py-3
//       rounded-xl
//       text-gray-400
//       hover:bg-[#21262D]
//       hover:text-white
//       transition
//     "
//             >
//               <Icon size={20} />
//               {item.name}
//             </button>

//           ) : (

//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `
//       flex items-center gap-3
//       px-4 py-3
//       rounded-xl
//       transition
//       ${isActive
//                   ? "bg-purple-600 text-white"
//                   : "text-gray-400 hover:bg-[#21262D] hover:text-white"
//                 }
//       `
//               }
//             >
//               <Icon size={20} />
//               {item.name}
//             </NavLink>


//           );
//         })}
//       </div>
//     </div>
//   );
// }

import {
  BookOpen,
  Bot,
  Smile,
  Settings,
  Activity,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { UseTheme } from "../context/UseTheme";
import logo from "../assets/logo.png";

export default function Sidebar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } =
    UseTheme();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Diary",
      path: "/diary",
      icon: BookOpen,
    },
    {
      name: "AI Chat",
      path: "/chat",
      icon: Bot,
    },
    {
      name: "Mood",
      path: "/mood",
      icon: Smile,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: Activity,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  const SidebarContent =  (
    <>
      <div className="flex items-center justify-evenly  mb-10">
        <div>
        <img src={logo} alt="Logo" className="mx-auto p-3" />
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl glass"
        >
          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                px-4 py-3
                rounded-xl
                transition-all

                ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-500/10"
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

      <button
        onClick={handleLogout}
        className="
          flex
          items-center
          gap-3
          mt-10
          px-4
          py-3
          rounded-xl
          hover:bg-red-500/10
          w-full
        "
      >
        <LogOut size={20} />
        Logout
      </button>
    </>
  );

  return (
    <>
      {/* MOBILE TOP BAR */}

      <div
        className="
          lg:hidden
          fixed
          top-0
          left-0
          right-0
          z-50
          glass
          p-4
          flex
          justify-between
          items-center
        "
      >
         <div>
        <img src={logo} alt="Logo" className="mx-auto h-14 w-60" />
        </div>

        <button
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}

      {open && (
        <>
          <div
            className="
              fixed
              inset-0
              bg-black/50
              z-40
            "
            onClick={() => setOpen(false)}
          />

          <div
            className="
              fixed
              left-0
              top-0
              bottom-0
              w-72
              z-50
              glass
              p-6
            "
          >
            <button
              className="mb-6"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>

            {SidebarContent}
          </div>
        </>
      )}

      {/* DESKTOP */}

      <div
        className="
          hidden
          lg:block
          w-72
          min-h-screen
          glass
          p-6
        "
      >
        {SidebarContent}
      </div>
    </>
  );
}
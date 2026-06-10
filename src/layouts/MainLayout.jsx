// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";

// export default function MainLayout({ children }) {
//   return (
//     <div className="flex bg-[#0D1117]">
//       <Sidebar />

//       <main className="flex-1">
//         {children}
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";

// export default function MainLayout() {
//   return (
//     <div className="flex bg-[#0D1117] min-h-screen">
//       <Sidebar />

//       <main className="flex-1">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="page-bg flex">
      <Sidebar />

      <main
         className="
      flex-1
      pt-20 lg:pt-0
      px-4 md:px-8
      max-w-7xl
      mx-auto
      w-full
    "
      >
        <Outlet />
      </main>
    </div>
  );
}
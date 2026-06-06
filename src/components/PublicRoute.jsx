import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex bg-[#0D1117] min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
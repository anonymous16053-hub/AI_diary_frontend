import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex bg-[#0D1117]">
      <Sidebar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
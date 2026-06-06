// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Diary from "./pages/Diary";
// import AIChat from "./pages/AIChat";
// import Mood from "./pages/Mood";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Settings from "./pages/Settings";
// import Editor from "./pages/Editor";
// import MainLayout from "./layouts/MainLayout";
// import Analytics from "./pages/Analytics";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route
//           path="/*"
//           element={
//             <MainLayout>
//               <ProtectedRoute>
//               <Routes>
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/diary" element={<Diary />} />
//                 <Route path="/chat" element={<AIChat />} />
//                 <Route path="/mood" element={<Mood />} />
//                 <Route path="/editor" element={<Editor />} />
//                 <Route path="/analytics" element={<Analytics />} />
//                 <Route path="/settings" element={<Settings />} />
//                 </Routes>
//                 </ProtectedRoute>
//             </MainLayout>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import AIChat from "./pages/AIChat";
import Mood from "./pages/Mood";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Editor from "./pages/Editor";
import Analytics from "./pages/Analytics";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED */}
        <Route element={<ProtectedRoute />}>

          <Route element={<MainLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/chat" element={<AIChat />} />
            <Route path="/mood" element={<Mood />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />

          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
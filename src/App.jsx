import Dashboard from "./pages/Dashboard";
import Diary from "./pages/Diary";
import AIChat from "./pages/AIChat";
import Mood from "./pages/Mood";
import Settings from "./pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Editor from "./pages/Editor";

function App() {
   return (
      <BrowserRouter>
         <MainLayout>
            <Routes>
               <Route path="/"
                  element={<Dashboard />}
               />

               <Route path="/diary"
                  element={<Diary />}
               />

               <Route path="/chat"
                  element={<AIChat />}
               />

               <Route path="/mood"
                  element={<Mood />}
               />

               <Route
                  path="/editor"
                  element={<Editor />}
               />

               <Route path="/settings"
                  element={<Settings />}
               />
            </Routes>
         </MainLayout>
      </BrowserRouter>
   );

}
export default App

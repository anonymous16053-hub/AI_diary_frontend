import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <ThemeProvider>
      <App />
      <Toaster
        position='top-right'
        toastOptions={{
          duration: 3000,
          style: {
            background: "#161B22",
        color: "#fff",
        borderRadius: "12px",
          }
        }
      }
      />
    </ThemeProvider>
  </StrictMode>,
)

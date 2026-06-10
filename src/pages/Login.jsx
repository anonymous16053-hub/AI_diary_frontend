import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import API from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  console.log(localStorage.getItem("user_id"));
  

  async function handleLogin() {
      console.log(localStorage.getItem("user_id"));

    try {
      console.log(localStorage.getItem("user_id"));
      
      const response = await API.post("/login", {
        username,
        password,
      });

      if (response.data.user_id) {

        localStorage.setItem(
          "user_id",
          response.data.user_id
        );



        navigate("/dashboard");
      }

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Login failed");
    }
  }

  return (
 <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-20 right-0 w-96 h-96 bg-pink-600 opacity-20 blur-[120px] pointer-events-none" />
      <div className="bg-[#161B22] p-8 rounded-3xl w-[400px] shadow-lg">

  <div className="text-center">
  <img src={logo} alt="Logo" className="mx-auto p-3" />
</div>

        <input
          className="
            w-full
            p-3
            mb-4
            rounded-xl
            bg-[#0D1117]
            text-white
            border border-gray-700
            outline-none
            
          "
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="
            w-full
            p-3
            mb-6
            rounded-xl
            bg-[#0D1117]
            text-white
            border border-gray-700
            outline-none
          "
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
            className="
            w-full
            bg-purple-600
            hover:bg-purple-700
            text-white
            p-3
            rounded-xl
            transition
          "
        >
          Login
        </button>

        <p className="text-gray-400 mt-4 text-center">
  Don't have an account?{" "}
  <   Link
    to="/register"
    className="text-purple-400"
  >
    Register
  </Link>
</p>

      </div>

    </div>
  );
}
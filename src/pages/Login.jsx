import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
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

      <div className="bg-[#161B22] p-8 rounded-3xl w-96">

        <h1 className="text-3xl font-bold text-white mb-6">
          Login
        </h1>

        <input
          className="w-full p-3 rounded-xl bg-black mb-4"
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 rounded-xl bg-black mb-4"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 p-3 rounded-xl text-white"
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
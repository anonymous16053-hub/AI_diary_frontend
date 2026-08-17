import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import API from "../services/api";
import toast from "react-hot-toast";
export default function Login() {

  const navigate = useNavigate();
  // let isLoading = false;
  const [identifier, setIdentifier] = useState("");
  const [password,setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
   async function handleLogin() {
    if(isLoading) return;
    setIsLoading(true);
  try {
    const response = await API.post(
      "/login",
      {
        identifier,
        password,
      }
    );

    localStorage.setItem(
      "user_id",
      response.data.user_id
    );

    toast.success(
      "Welcome back!"
    );

    navigate("/dashboard");

  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Login failed"
    );
  }
  finally{
    setIsLoading(false);
  }
}
// User1@test
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
          placeholder="Username or Email"
          onChange={(e)=>setIdentifier(e.target.value)}
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
          diabled={isLoading}
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
          {isLoading ? (<img src="assets/loader.svg" alt="Loading..." className="w-6 h-6"/>) : ("Login")}
          
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

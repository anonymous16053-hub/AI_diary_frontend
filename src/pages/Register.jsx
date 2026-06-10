import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import API from "../services/api";

export default function Register() {

  const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister() {

    if (!username || !email || !password ) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const response = await API.post("/register", {
          username,
          email,
        password
      });

      alert(response.data.message);

      navigate("/login");

    } catch (error) {

      console.error(error);

      alert("Registration Failed");
    } finally {

      setLoading(false);
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
          type="text"
          placeholder="Username"
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="email"
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          disabled={loading}
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
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-400 hover:text-purple-300"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}
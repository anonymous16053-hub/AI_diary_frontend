import { useState,useEffect,useRef  } from "react";

import API from "../services/api";

export default function AIChat() {
const messagesEndRef = useRef(null);
const [message, setMessage] = useState("");
const [messages, setMessages] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {

  async function loadChatHistory() {

    try {

      const userId =
        localStorage.getItem("user_id");

      const response =
        await API.get(
          `/chat-history/${userId}`
        );

      const history = [];

      response.data.forEach(chat => {

        history.push({
          sender: "user",
          text: chat.user_message
        });

        history.push({
          sender: "ai",
          text: chat.ai_reply,
          mood: chat.mood
        });

      });

      setMessages(history);

    } catch (error) {

      console.log(error);

    }
  }

  loadChatHistory();

}, []);
  
useEffect(() => {

  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth"
  });

}, [messages]);
  
async function sendMessage() {


if (!message.trim()) return;

try {

  setLoading(true);

  const userId =
    localStorage.getItem("user_id");

  const response =
    await API.post("/chat", {
      user_id: userId,
      message: message
    });

  setMessages(prev => [
    ...prev,
    {
      sender: "user",
      text: message
    },
    {
      sender: "ai",
      text:
        response.data.reply ||
        response.data.response ||
        "No response",
      mood:response.data.mood
    }
  ]);

  setMessage("");

} catch (error) {

  console.log(error);

  alert("Chat failed");

} finally {

  setLoading(false);
}
}
async function clearChat() {

  try {

    const userId =
      localStorage.getItem("user_id");

    await API.delete(
      `/chat-history/${userId}`
    );

    setMessages([]);

  } catch (error) {

    console.log(error);

  }

}
return ( <div className="h-screen flex flex-col text-white p-6">

  <h1 className="text-3xl font-bold mb-6">
    AI Companion 🤖
  </h1>
  <button
    onClick={clearChat}
    className="
      bg-red-600
      px-4
      py-2
      mb-5
      rounded-xl
      hover:bg-red-700
    "
  >
    Clear Chat
  </button>


  <div className="flex-1 overflow-y-auto space-y-4">

    {messages.map((msg, index) => (

      <div
  key={index}
  className={
    msg.sender === "user"
      ? "bg-purple-600 ml-auto max-w-lg p-4 rounded-2xl"
      : "bg-[#161B22] max-w-lg p-4 rounded-2xl"
  }
>

  <p>{msg.text}</p>

  {msg.sender === "ai" && msg.mood && (
    <p className="text-xs text-gray-400 mt-2">
      Mood: {msg.mood}
    </p>
        )
        }

</div>

    ))}
 <div ref={messagesEndRef}></div>
  </div>

  <div className="flex gap-3 mt-4">

    <input
      value={message}
      onChange={(e) =>
        setMessage(e.target.value)
      }
      placeholder="Ask anything..."
      className="
        flex-1
        bg-[#161B22]
        rounded-xl
        p-4
        outline-none
      "
    />

    <button
      onClick={sendMessage}
      disabled={loading}
      className="
        bg-purple-600
        px-6
        rounded-xl
      "
    >
      {loading ? "..." : "Send"}
    </button>

  </div>

</div>

);
}

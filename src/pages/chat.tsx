import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { Send } from "@mui/icons-material";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

const socket = io("http://localhost:3000/", {
  transports: ["websocket"],
  auth: {
    headers: {
      Authorization: `${localStorage.getItem("access_token")}`,
    },
  },
});

const Chat = () => {
  const { group_name } = useParams();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("start", group_name);

    socket.emit("join-group", group_name, localStorage.getItem("access_token"));

    socket.on("join-group", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Listen for incoming group messages
    socket.on("message-group", (message) => {
      setMessages((prevMessages) => [...prevMessages, message.message]);
    });

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the connection when the component unmounts
    return () => {
      socket.off("message-group");
    };
  }, [group_name]);

  // Handle sending messages
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      socket.emit('message-group', { group: group_name, message:input });
      setInput("");
    }
  };

  return (
    <>
      <div className="border h-full">
        <div>
          {messages.map((message, index) => (
            <div key={index} className="p-1 space-y-2 flex gap-1 items-center">
              <ChevronRight size={20}/>
              {message}
            </div>
          ))}
        </div>
      </div>
      <div className="h-14 flex items-center px-2">
        <Input
          type="text"
          placeholder="Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          className="border-none h-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:ring-offset-gray-100 bg-none p-0"
        />
        <button onClick={handleSendMessage}>
          <Send />
        </button>
      </div>
    </>
  );
};

export default Chat;

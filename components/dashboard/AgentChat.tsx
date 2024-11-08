"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface AgentChatProps {
  agent: any; // Replace with proper type
}

export function AgentChat({ agent }: AgentChatProps) {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    // Add mock response - replace with real API call
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "This is a mock response. Replace with real AI interaction." },
      ]);
    }, 1000);
    setInput("");
  };

  return (
    <div className="card bg-neutral flex flex-col h-[400px]">
      <div className="card-body p-4 flex flex-col gap-4">
        <h3 className="font-semibold border-b border-base-300 pb-2">
          Chat with {agent?.name || "Agent"}
        </h3>

        <div className="flex-1 overflow-auto">
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-content"
                      : "bg-base-300"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 pt-2 border-t border-base-300">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="input input-bordered flex-1"
          />
          <button type="submit" className="btn btn-primary btn-square">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
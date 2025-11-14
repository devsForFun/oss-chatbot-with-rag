"use client";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { useChat } from "@ai-sdk/react"; // correct package

export default function ChatLayout() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
<div className="w-full min-h-screen flex items-center justify-center bg-gray-1000">
  <div className="w-full max-w-md h-[80vh] flex flex-col bg-black rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <ChatHeader />

      {/* Messages */}
      <ChatMessages messages={messages} />

      {/* Input */}
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
    </div>
  );
}

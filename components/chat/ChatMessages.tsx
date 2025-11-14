"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MessageBubble from "./MessageBubble";
import type { UIMessage } from "ai";

type Message = UIMessage & { content?: ReactNode | string };

export default function ChatMessages({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ScrollArea className="flex-1 overflow-y-auto p-4">
      <div className="flex flex-col gap-4">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            role={msg.role === "assistant" ? "assistant" : "user"}
            content={msg.content}
          />
        ))}

        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  );
}

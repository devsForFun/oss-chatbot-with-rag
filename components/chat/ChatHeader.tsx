"use client";

// import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ChatHeader() {
  return (
    <div className="w-full p-4 flex items-center gap-3 border-b">
      <Avatar className="h-9 w-9">
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold tracking-tight">Chatbot</h1>
        <p className="text-xs text-muted-foreground">Ask me anything</p>
      </div>
    </div>
  );
}

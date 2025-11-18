"use client";

import ChatSidebar from "@/components/chat/ChatSidebar";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div>
        <ChatSidebar />
      </div>

      <main className="flex flex-col flex-1">
        {children}
      </main>
    </div>
  );
}

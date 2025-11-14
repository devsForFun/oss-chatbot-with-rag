"use client";

import type { ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ChatInput({
  input,
  handleInputChange,
  handleSubmit,
}: {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border-t p-4 flex items-end gap-2 bg-black"
    >
      <Textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message…"
        className="min-h-[52px] max-h-[120px] resize-none"
      />

      <Button type="submit" className="h-[52px] px-6">
        Send
      </Button>
    </form>
  );
}

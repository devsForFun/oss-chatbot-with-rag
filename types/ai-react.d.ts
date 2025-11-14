declare module 'ai/react' {
  import * as React from 'react';

  export type ChatMessage = any;

  export function useChat(opts?: any): {
    messages: ChatMessage[];
    input: string;
    setInput: (value: string) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e?: React.FormEvent) => void;
    append: (message: ChatMessage) => void;
  };

  export default useChat;
}

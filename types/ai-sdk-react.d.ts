declare module '@ai-sdk/react' {
  // Re-export types from the `ai` package's TypeScript definitions where available.
  export * from 'ai/react';
  import useChat from 'ai/react';
  export default useChat;
}

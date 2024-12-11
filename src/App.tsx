import React, { useState } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ChatHeader } from './components/ChatHeader';
import type { Message, ChatState } from './types/chat';

function App() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
  });

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    // Simulate AI response (to be replaced with real AI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "This is a placeholder response. AI integration coming soon!",
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, aiResponse],
      }));
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatHeader />

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-4 max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          {chatState.messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <p>No messages yet. Start a conversation!</p>
            </div>
          ) : (
            chatState.messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="max-w-4xl mx-auto w-full">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
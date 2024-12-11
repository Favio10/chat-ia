import React from 'react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-75 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}
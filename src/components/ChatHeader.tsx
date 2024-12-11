import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ChatHeaderProps {
  userImage?: string;
  userName?: string;
}

export function ChatHeader({ 
  userImage = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&fit=crop&q=80", 
  userName = "John Doe" 
}: ChatHeaderProps) {
  return (
    <div className="bg-white shadow-sm p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="text-blue-500" />
          <h1 className="text-xl font-semibold">Chat Interface</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">{userName}</span>
          <img
            src={userImage}
            alt={userName}
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
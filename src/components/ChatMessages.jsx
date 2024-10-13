import React from 'react'
import MessageBubble from './MessageBubble'

export default function ChatMessages({ messages, isTyping, onCopy, onEdit }) {
  return (
    <div className="space-y-4 p-4">
      {messages.map((message, index) => (
        <MessageBubble 
          key={index} 
          message={message} 
          onCopy={onCopy}
          onEdit={onEdit}
        />
      ))}
      {isTyping && <MessageBubble isTyping />}
    </div>
  )
}

import { useState } from 'react'

export function useChat() {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const addMessage = (message) => {
    setMessages(prevMessages => [...prevMessages, message])
  }

  return { messages, addMessage, isTyping, setIsTyping }
}

import React, { useState, useRef } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendIcon } from '@/utils/icons'

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSend(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <div className="relative flex-1">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Send a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="pr-10 py-6 rounded-md bg-background-secondary border-gray-700 text-text placeholder-text-muted"
        />
        <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-transparent">
          <SendIcon className="h-4 w-4 text-text-muted" />
        </Button>
      </div>
    </form>
  )
}

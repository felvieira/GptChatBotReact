import React from 'react'
import { Button } from "@/components/ui/button"
import { CopyIcon, EditIcon, ShareIcon } from '@/utils/icons'
import RobotImg from '@/assets/robot-img.png'
import LogoSvg from '@/assets/logo.svg'

export default function MessageBubble({ message, onCopy, onEdit, isTyping }) {
  if (isTyping) {
    return (
      <div className="flex items-center bg-background-secondary p-4 rounded-md">
        <img src={LogoSvg} alt="Bot" className="w-8 h-8 rounded-md mr-3" />
        <p className="text-text-muted">Digitando...</p>
      </div>
    )
  }

  const isAssistant = message.role === 'assistant'

  return (
    <div className={`w-full py-5 ${isAssistant ? 'bg-background-secondary' : 'bg-background'}`}>
      <div className="flex items-start">
        <img
          src={isAssistant ? LogoSvg : RobotImg}
          alt={isAssistant ? "Bot" : "User"}
          className="w-8 h-8 rounded-md mr-3"
        />
        <div className="flex-grow">
          <p className={`text-sm ${isAssistant ? 'text-text-muted' : 'text-text'}`}>
            {message.content}
          </p>
        </div>
        <div className="flex ml-2">
          {isAssistant ? (
            <>
              <Button variant="ghost" size="icon" onClick={() => onCopy(message.content)} className="rounded-md">
                <CopyIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-md">
                <ShareIcon className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => onEdit(message.content)} className="rounded-md">
              <EditIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

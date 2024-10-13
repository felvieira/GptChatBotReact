import React, { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BackIcon, MoreHorizontalIcon, SendIcon, RefreshIcon, ShareIcon, CopyIcon, EditIcon } from '../utils/icons'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header'
import RobotImg from '@/assets/robot-img.png'
import LogoSvg from '@/assets/logo.svg'
import { InfoCard } from '@/components/InfoCard'
import { processMessageToChatGPT } from '@/services/chatService'

export function ChatPage() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = { role: 'user', content: input }
      const newMessages = [...messages, newMessage]
      setMessages(newMessages)
      setInput('')
      setIsTyping(true)
      try {
        const response = await processMessageToChatGPT(newMessages)
        setMessages([...newMessages, { role: 'assistant', content: response }])
      } catch (error) {
        console.error('Error sending message:', error)
        // Adicione aqui a lógica para lidar com erros, como exibir uma mensagem para o usuário
      } finally {
        setIsTyping(false)
      }
    }
  }

  const handleRegenerate = async () => {
    if (messages.length > 0) {
      const lastUserMessageIndex = messages.map(m => m.role).lastIndexOf('user')
      if (lastUserMessageIndex !== -1) {
        setIsTyping(true)
        try {
          const response = await processMessageToChatGPT(messages.slice(0, lastUserMessageIndex + 1))
          setMessages([...messages.slice(0, lastUserMessageIndex + 1), { role: 'assistant', content: response }])
        } catch (error) {
          console.error('Error regenerating response:', error)
          // Adicione aqui a lógica para lidar com erros
        } finally {
          setIsTyping(false)
        }
      }
    }
  }

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content)
  }

  const handleEdit = (content) => {
    setInput(content)
    inputRef.current.focus()
  }

  return (
    <div className="flex flex-col h-screen bg-background text-text">
      <Header 
        title="Health" 
        leftIcon={<BackIcon className="h-6 w-6" />}
        rightIcon={<MoreHorizontalIcon className="h-6 w-6 text-options-icon" />}
        onRightPress={() => navigate('/profile')}
      />
      <main className="flex-1 overflow-auto">
        {messages.length === 0 ? (
          <div className="p-4 space-y-4">
            <div className="text-center text-4xl text-text-title font-bold mt-12 mb-16">BrainBox</div>
            <div className="space-y-4">
              <InfoCard>Remembers what user said earlier in the conversation</InfoCard>
              <InfoCard>Allows user to provide follow-up corrections With AI</InfoCard>
              <InfoCard>Limited knowledge of world and events after 2021</InfoCard>
              <InfoCard>May occasionally generate incorrect information</InfoCard>
              <InfoCard>May occasionally produce harmful instructions or biased content</InfoCard>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`w-full py-5 ${
              message.role === 'user' ? 'bg-background' : 'bg-background-secondary'
            }`}>
              <div className="max-w-4xl mx-auto px-4">
                {message.content.length <= 40 ? (
                  <div className="flex items-center">
                    <img
                      src={message.role === 'user' ? RobotImg : LogoSvg}
                      alt={message.role === 'user' ? "User" : "Bot"}
                      className="w-8 h-8 rounded-[5px] mr-3"
                    />
                    <p className={`flex-grow font-urbanist text-[11.82px] font-medium leading-[18.91px] tracking-[0.1477707028388977px] ${
                      message.role === 'assistant' ? 'text-text-muted' : 'text-text'
                    }`}>
                      {message.content}
                    </p>
                    <div className="flex ml-2">
                      {message.role === 'assistant' ? (
                        <>
                          <Button variant="ghost" size="icon" onClick={() => handleCopy(message.content)} className="rounded-[5px]">
                            <CopyIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="rounded-[5px]">
                            <ShareIcon className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(message.content)} className="rounded-[5px]">
                          <EditIcon className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <img
                        src={message.role === 'user' ? RobotImg : LogoSvg}
                        alt={message.role === 'user' ? "User" : "Bot"}
                        className="w-8 h-8 rounded-[5px]"
                      />
                      <div className="flex">
                        {message.role === 'assistant' ? (
                          <>
                            <Button variant="ghost" size="icon" onClick={() => handleCopy(message.content)} className="rounded-[5px]">
                              <CopyIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-[5px]">
                              <ShareIcon className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <Button variant="ghost" size="icon" onClick={() => handleEdit(message.content)} className="rounded-[5px]">
                            <EditIcon className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className={`font-urbanist text-[11.82px] font-medium leading-[18.91px] tracking-[0.1477707028388977px] text-left ${
                      message.role === 'assistant' ? 'text-text-muted' : 'text-text'
                    }`}>
                      {message.content}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        {isTyping && (
          <div className="w-full bg-background-secondary py-5">
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-center">
                <img
                  src={LogoSvg}
                  alt="Bot"
                  className="w-8 h-8 rounded-[5px] mr-3"
                />
                <p className="text-text-muted">Digitando...</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="p-4">
        <div className="max-w-4xl mx-auto">
          {messages.length > 0 && (
            <div className="flex justify-center mb-4">
              <Button 
                variant="outline" 
                onClick={handleRegenerate} 
                className="rounded-[5px] bg-background-secondary text-text-muted border-text-muted px-4 py-2"
              >
                <RefreshIcon className="h-4 w-4 mr-2" />
                Regenerate Response
              </Button>
            </div>
          )}
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center">
            <div className="relative flex-1">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Send a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="pr-10 py-6 rounded-[7px] bg-background-secondary border-gray-700 text-text placeholder-text-muted font-urbanist text-body-medium"
              />
              <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-transparent">
                <SendIcon className="h-4 w-4 text-text-muted" />
              </Button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}

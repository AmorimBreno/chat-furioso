import { useEffect, useRef } from 'react'
import { MessageList } from '../types/message'
import ChatMessage from './chatMessages/chatMessage'

export default function ChatSpace({ message }: MessageList) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [message]) 

  return (
    <div
    ref={containerRef}
    className="scrollbar-none h-min w-full flex-col-reverse items-end space-y-8 overflow-y-auto pb-4">
      {message.map((message, index) => {
        return (
          <ChatMessage
            key={index}
            text={message.text}
            sender={message.sender}
            type={message.type}
            prevMatchInfo={message.prevMatchInfo}
            nextMatchInfo={message.nextMatchInfo}
          />
        )
      })}
    </div>
  )
}

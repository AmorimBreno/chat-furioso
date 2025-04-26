import { MessageList } from '../types/message'
import ChatMessage from './chatMessages/chatMessage'

export default function ChatSpace({ message }: MessageList) {
  return (
    <div className="scrollbar-none h-min w-full flex-col-reverse items-end space-y-8 overflow-y-auto pb-4">
      {message.map((message, index) => {
        return (
          <ChatMessage
            text={message.text}
            sender={message.sender}
            type={message.type}
          />
        )
      })}
    </div>
  )
}

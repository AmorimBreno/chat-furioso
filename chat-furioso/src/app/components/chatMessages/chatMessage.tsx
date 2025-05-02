import { Message } from '@/app/types/message'
import FuriaChatNextMatchMessage from './ChatInteractions/NextMatch'
import FuriaChatPreviousMatchMessage from './ChatInteractions/PreviousMatch'
import FuriaChatShowMembersMessage from './ChatInteractions/ShowMembers'
import { MessageTypeEnum } from '@/utils/enums/messageTypeEnum'
import { SenderEnum } from '@/utils/enums/SenderEnum'
import { FaUser } from 'react-icons/fa6'

export default function ChatMessage(message: Message) {
  return (
    <>
      {message.sender === SenderEnum.FURIA ? (
        (() => {
          switch (message.type) {
            case MessageTypeEnum.NEXTMATCH:
              return <FuriaChatNextMatchMessage />
            case MessageTypeEnum.PREVMATCH:
              return (
                <FuriaChatPreviousMatchMessage
                  finalScore={message.prevMatchInfo!.finalScore}
                  opponent={message.prevMatchInfo!.opponent}
                  maps={message.prevMatchInfo!.maps}
                  players={message.prevMatchInfo!.players}
                />
              )
            case MessageTypeEnum.PLAYERS:
              return <FuriaChatShowMembersMessage />
            default:
              return <FuriaChatTextMessage text={message.text} />
          }
        })()
      ) : (
        <UserChatMessage text={message.text} />
      )}
    </>
  )
}

export function UserChatMessage({ text }: { text: string }) {
  return (
    <div className={`flex w-full flex-row items-start justify-end`}>
      <div className="min-h-12 max-w-[70%] text-pretty px-4 text-black">
        <p className="flow-text break-words">{text}</p>
      </div>
      <div className="h-12 w-12 border-2 border-black">
        <FaUser className="h-full w-full p-2 text-black" />
      </div>
    </div>
  )
}

export function FuriaChatTextMessage({ text }: { text: string }) {
  return (
    <div className={`flex w-full items-start justify-start`}>
      <img
        className="h-12 w-12"
        alt=""
        src="https://gg.soclminer.com.br/customers/79f6dd9a-33ad-4af8-a265-9d446e17b89c/e88a572fa1ef4ec0be7a81d3695ec840/logo.png?v=1745626288227"
      ></img>
      <div
        className={`flex min-h-12 max-w-[70%] items-center border-2 border-black p-2 text-left text-sm font-semibold text-black`}
      >
        {text}
      </div>
    </div>
  )
}

export function FuriaLogo({ size }: { size: string }) {
  return (
    <img
      className={size}
      alt=""
      src="https://gg.soclminer.com.br/customers/79f6dd9a-33ad-4af8-a265-9d446e17b89c/e88a572fa1ef4ec0be7a81d3695ec840/logo.png?v=1745626288227"
    ></img>
  )
}
export function NaviLogo({ size }: { size: string }) {
  return (
    <img
      className={`${size} bg-black`}
      alt=""
      src="//upload.wikimedia.org/wikipedia/commons/e/e0/Natus_Vincere_logo.png"
    ></img>
  )
}

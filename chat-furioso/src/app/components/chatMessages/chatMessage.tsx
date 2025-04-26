import FuriaChatNextMatchMessage from './ChatInteractions/NextMatch'
import FuriaChatPreviousMatchMessage from './ChatInteractions/PreviousMatch'
import FuriaChatShowMembersMessage from './ChatInteractions/ShowMembers'

export default function ChatMessage(message: {
  text: string
  sender: string
  type: string
}) {
  return (
    <>
      {message.sender === 'furia' ? (
        (() => {
          switch (message.type) {
            case 'nextMatch':
              return <FuriaChatNextMatchMessage text={message.text} />
            case 'previousMatch':
              return <FuriaChatPreviousMatchMessage text={message.text} />
            case 'members':
              return <FuriaChatShowMembersMessage text={message.text} />
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
      <div
        className={`flex min-h-12 max-w-[70%] items-center rounded-md p-2 text-start text-sm font-semibold text-black`}
      >
        {text}
      </div>
      <div className="h-12 w-12 border-2 border-black"></div>
    </div>
  )
}

export function FuriaChatTextMessage({ text }: { text: string }) {
  return (
    <div className={`flex w-full items-start justify-start`}>
      <div className="">
        <img
          className="h-12 w-12"
          alt=""
          src="https://gg.soclminer.com.br/customers/79f6dd9a-33ad-4af8-a265-9d446e17b89c/e88a572fa1ef4ec0be7a81d3695ec840/logo.png?v=1745626288227"
        ></img>
      </div>
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

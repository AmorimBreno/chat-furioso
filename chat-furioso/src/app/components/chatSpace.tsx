import ChatMessage from './chatMessages/chatMessage'

export default function ChatSpace() {
  const messageMockList = [
    {
      text: 'O que e a Furia?',
      sender: 'user',
      type: 'text'
    },
    {
      text: 'Tudo certo, e você? Aqui estao algumas informacoes sobre o time Furia',
      sender: 'furia',
      type: 'text'
    },
    {
      text: '',
      sender: 'furia',
      type: 'previousMatch'
    }
  ]

  return (
    <div className="scrollbar-none h-min w-full flex-col-reverse items-end space-y-8 overflow-y-auto pb-4">
      {messageMockList.map((message, index) => {
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

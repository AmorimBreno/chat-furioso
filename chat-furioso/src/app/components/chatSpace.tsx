import ChatMessage from './chatMessage'

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
      text: 'Desde sua ascensão no cenário competitivo de Counter-Strike, a FURIA Esports se tornou sinônimo de paixão, ousadia e um estilo de jogo único que cativou fãs ao redor do mundo. Fundada em 2017, a organização brasileira rapidamente se destacou não apenas pela habilidade individual de seus jogadores, mas por uma abordagem agressiva e imprevisível que desestabiliza até os times mais consolidados.',
      sender: 'furia',
      type: 'text'
    },
    {
      text: 'Acho que estão perdendo muito',
      sender: 'user',
      type: 'text'
    },
    {
      text: 'Acho que estão perdendo muito',
      sender: 'user',
      type: 'text'
    },
    {
      text: 'Desde sua ascensão no cenário competitivo de Counter-Strike, a FURIA Esports se tornou sinônimo de paixão, ousadia e um estilo de jogo único que cativou fãs ao redor do mundo. Fundada em 2017, a organização brasileira rapidamente se destacou não apenas pela habilidade individual de seus jogadores, mas por uma abordagem agressiva e imprevisível que desestabiliza até os times mais consolidados.',
      sender: 'furia',
      type: 'text'
    },
    {
      text: 'Desde sua ascensão no cenário competitivo de Counter-Strike, a FURIA Esports se tornou sinônimo de paixão, ousadia e um estilo de jogo único que cativou fãs ao redor do mundo. Fundada em 2017, a organização brasileira rapidamente se destacou não apenas pela habilidade individual de seus jogadores, mas por uma abordagem agressiva e imprevisível que desestabiliza até os times mais consolidados.',
      sender: 'furia',
      type: 'text'
    },
    {
      text: 'Acho que estão perdendo muito',
      sender: 'user',
      type: 'text'
    },
    {
      text: 'Acho que estão perdendo muito',
      sender: 'user',
      type: 'text'
    },

    {
      text: 'Acho que estão perdendo muito',
      sender: 'user',
      type: 'text'
    },

    {
      text: 'Acho que estão perdendo muito',
      sender: 'user',
      type: 'text'
    }
  ]

  return (
    <div className="scrollbar-none h-min w-full flex-col-reverse items-end space-y-4 overflow-y-auto pb-4">
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

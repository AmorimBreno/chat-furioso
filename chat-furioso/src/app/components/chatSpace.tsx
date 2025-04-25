export default function ChatSpace() {
  const messageMockList = [
    {
      message: 'Oi, tudo bem?',
      sender: 'user',
      type: 'text'
    },
    {
      text: 'Tudo certo, e você?',
      sender: 'furia',
      type: 'text'
    },
    {
      text: 'O que você acha do time?',
      sender: 'furia',
      type: 'text'
    },
    {
      text: 'Acho que estão perdendo muito',
      sender: 'user',
      type: 'text'
    }
  ]

  return (
    <div className="h-full w-full flex-1 flex-col space-y-4 overflow-y-auto pb-4">
      {messageMockList.map((message, index) => {
        return (
          <div
            className={`flex w-full items-center ${message.sender == 'furia' ? 'justify-start' : 'justify-end'}`}
            key={index}
          >
            <div
              key={index}
              className={`flex h-40 w-80 items-center rounded-md ${message.sender == 'furia' ? 'bg-gray-800' : 'bg-gray-500'} p-2 text-center text-sm font-semibold ${message.sender == 'furia' ? 'text-white' : 'text-black'}`}
            >
              {message.text}
            </div>
          </div>
        )
      })}
    </div>
  )
}

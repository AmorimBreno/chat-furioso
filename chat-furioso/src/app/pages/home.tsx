import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import TextBox from '../components/textBox'
import ChatSpace from '../components/chatSpace'
import { Message } from '../types/message'
import { MessageTypeEnum } from '../types/MessageTypeEnum'
import { SenderEnum } from '../types/SenderEnum'

export function Home() {
  const [reply, setReply] = useState('')

  const askAI = async () => {
    const response = await axios.post('http://localhost:5000/ask-furia', {
      question: input
    })
    setReply(response.data.response)
  }

  const [input, setInput] = useState('')

  const [messageList, setMessageList] = useState<Message[]>([
    {
      text: 'Ola, me pergunte o que quiser sobre a furia no CS!',
      sender: SenderEnum.FURIA,
      type: MessageTypeEnum.TEXT
    }
  ])

  const addNewMessage = (message: Message) => {
    setMessageList((prevMessages) => [...prevMessages, message])
    askAI()
    setMessageList((prevMessages) => [
      ...prevMessages,
      { text: reply, sender: SenderEnum.FURIA, type: MessageTypeEnum.TEXT }
    ])
    setInput('')
  }

  return (
    <div className="h-screen w-screen px-16 pb-16">
      <nav className="flex h-[10%] w-full items-center justify-center">
        <img
          src="https://furiagg.fbitsstatic.net/sf/img/logo-furia.svg?theme=main&amp;v=202503171541"
          alt="Logo da Furia"
          width="88"
          height="32"
        />
      </nav>
      <div className="flex h-[95%] flex-col items-center justify-end overflow-hidden rounded-md bg-white p-4 shadow-[0_0_15px_0_rgba(0,0,0,0.1)] shadow-slate-300">
        <ChatSpace message={messageList} />
        <TextBox text={input} setText={setInput} sendMessage={addNewMessage} />
      </div>
    </div>
  )
}

{
  /* <div>
<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Pergunte sobre a NAVI..."
/>
<button onClick={askAI}>Enviar</button>
{reply && (
<p>
  <strong>Resposta:</strong> {reply}
</p>
)}
</div> */
}

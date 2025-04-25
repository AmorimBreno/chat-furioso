import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import TextBox from '../components/textBox'

export function Home() {
  const [input, setInput] = useState('')
  const [reply, setReply] = useState('')

  const askAI = async () => {
    const response = await axios.post('http://localhost:5000/api/ask-furia', {
      message: input
    })
    setReply(response.data.reply)
  }

  const [text, setText] = useState('')

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
      <div className="p-4 flex h-[95%] flex-col items-center justify-end rounded-md bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.1)] shadow-slate-300">
        <TextBox text={text} setText={setText} />
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

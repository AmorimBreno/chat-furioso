import axios from 'axios'
import { useEffect, useState } from 'react'
import TextBox from '../components/textBox'
import ChatSpace from '../components/chatSpace'
import { Message } from '../types/message'
import { MessageTypeEnum } from '../../utils/enums/messageTypeEnum'
import { SenderEnum } from '../../utils/enums/SenderEnum'
import { getMessageType } from '@/utils/utils'
import { PrevMatch, PrevMatchInfo } from '../types/prevMatch'
import { NextMatch } from '../types/nextMatchInfo'

export function Home() {
  // Setting first message and initializing the Message list
  const [messageList, setMessageList] = useState<Message[]>([
    {
      text: 'Olá, me pergunte o que quiser sobre o time de CS da Furia!',
      sender: SenderEnum.FURIA,
      type: MessageTypeEnum.TEXT
    }
  ])

  // Text input for the textbox to use
  const [input, setInput] = useState('')

  useEffect(() => {}, [messageList])

  const addNewMessage = async (message: Message) => {
    if (message.text.trim().length === 0) return
    setInput('')
    setMessageList((prevMessages) => [...prevMessages, message])

    const response = await axios.post('http://localhost:5000/ask-furia', {
      question: message.text
    })

    const messageType = getMessageType(response)

    if (messageType === MessageTypeEnum.PREVMATCH) {
      const prevMatchInfo = PrevMatch.fromJson(response.data)

      setMessageList((prevMessages) => [
        ...prevMessages,
        {
          text: aiReply,
          sender: SenderEnum.FURIA,
          type: messageType,
          prevMatchInfo: prevMatchInfo
        }
      ])
    }
    if (messageType === MessageTypeEnum.NEXTMATCH) {
      const nextMatchInfo = NextMatch.fromJson(response.data)
      setMessageList((prevMessages) => [
        ...prevMessages,
        {
          text: aiReply,
          sender: SenderEnum.FURIA,
          type: messageType,
          nextMatchInfo: nextMatchInfo
        }
      ])
    }

    if (messageType === MessageTypeEnum.TEXT) {
      setMessageList((prevMessages) => [
        ...prevMessages,
        {
          text: aiReply,
          sender: SenderEnum.FURIA,
          type: messageType
        }
      ])
    }

    if (messageType === MessageTypeEnum.PLAYERS) {
      setMessageList((prevMessages) => [
        ...prevMessages,
        {
          text: aiReply,
          sender: SenderEnum.FURIA,
          type: messageType
        }
      ])
    }

    const aiReply = response.data.response
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

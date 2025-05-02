import { useEffect, useRef } from 'react'
import { FaPaperPlane } from 'react-icons/fa6'
import { SenderEnum } from '../../utils/enums/SenderEnum'
import { MessageTypeEnum } from '../../utils/enums/messageTypeEnum'

export default function TextBox(props: {
  text: string
  setText: Function
  sendMessage: Function
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Ajusta a altura da textarea conforme o conteúdo
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto' // Reseta a altura
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px` // Define a altura com base no conteúdo
    }
  }, [props.text])

  return (
    <div className="flex h-[10%] w-full items-end justify-center bg-white">
      <div className="flex max-h-32 min-h-14 w-full items-end justify-between gap-2 border-2 border-black bg-white p-2">
        <textarea
          ref={textareaRef}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter") {
              props.sendMessage({
            text: props.text,
            sender: SenderEnum.USER,
            type: MessageTypeEnum.TEXT
            
          })
          e.preventDefault();
            }
            }}
          placeholder="Pergunte algo sobre a Furia..."
          className="text-md max-h-[96px] min-h-10 w-full resize-none overflow-hidden focus:outline-none"
          rows={1}
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
        ></textarea>
        <div
          onClick={() =>
            props.sendMessage({
              text: props.text,
              sender: SenderEnum.USER,
              type: MessageTypeEnum.TEXT
            })
          }
          className="group h-10 max-h-full w-10 rounded-sm bg-black p-2 transition-all duration-200 ease-in-out hover:border-2 hover:border-black hover:bg-white cursor-pointer"
        >
          <FaPaperPlane className="h-full w-full  text-white group-hover:text-black" />
        </div>
      </div>
    </div>
  )
}

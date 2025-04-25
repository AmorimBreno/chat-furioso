import { useEffect, useRef } from 'react'
import { FaPaperPlane } from 'react-icons/fa6'

export default function TextBox(props: { text: string; setText: Function }) {
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
          placeholder="Pergunte algo sobre a Furia..."
          className="text-md max-h-[96px] min-h-10 w-full resize-none overflow-hidden focus:outline-none"
          rows={1}
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
        ></textarea>
        <div className="group h-10 max-h-full w-10 rounded-sm bg-black p-2 transition-all duration-200 ease-in-out hover:border-2 hover:border-black hover:bg-white">
          <FaPaperPlane className="h-full w-full cursor-pointer text-white group-hover:text-black" />
        </div>
      </div>
    </div>
  )
}

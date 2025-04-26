import { FuriaLogo } from "../chatMessage";

export default function FuriaChatNextMatchMessage({ text }: { text: string }) {
    return (
      <div className={`flex w-full items-start justify-start`}>
        <FuriaLogo size={'h-12 w-12'} />
        <div
          className={`flex min-h-12 max-w-[70%] items-center border-2 border-black p-2 text-left text-sm font-semibold text-black`}
        >
          {text}
        </div>
      </div>
    )
  }
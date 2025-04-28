import { FuriaLogo, NaviLogo } from '../chatMessage'

export default function FuriaChatNextMatchMessage({ text }: { text: string }) {
  const nextMatch = {
    date: '15-10-2025',
    time: '14:00',
    opponent: 'NAVI',
    tournament: 'BLAST Premier Fall Groups 2023'
  }
  return (
    <div className="flex w-full items-start justify-start">
      <FuriaLogo size="h-12 w-12" />
      <div className="relative flex h-64 w-[600px] items-center justify-center overflow-hidden border-2 border-black">
        {/* Div preta cortando na diagonal */}
        <div className="clip-diagonal absolute inset-0 bg-black"></div>

        {/* Conteúdo acima */}
        <div className="relative z-10 flex w-full items-center justify-center">
          <div>
            <div className="flex size-32 items-center justify-center border-2 bg-black">
              <FuriaLogo size="h-35 w-40" />
            </div>
            <div className="mt-4 text-center font-michroma text-xs font-bold">
              FURIA
            </div>
          </div>
          <div className="flex h-32 w-64 items-center justify-center font-russo text-xl">
            CONTRA
          </div>
          <div>
            <div className="flex size-32 items-center justify-center border-2 bg-black">
              <NaviLogo size="h-35 w-40" />
            </div>
            <div className="mt-4 text-center font-michroma text-xs font-bold">
              {nextMatch.opponent}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

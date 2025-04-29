import { FuriaLogo, NaviLogo } from '../chatMessage'

export default function FuriaChatNextMatchMessage({ text }: { text: string }) {
  const nextMatch = {
    date: '15-10-2025',
    time: '14:00',
    opponent: 'NAVI',
    tournament: 'BLAST Premier Fall Groups 2025'
  }

  return (
    <div className="bg-red flex w-full items-start justify-start">
      <FuriaLogo size="h-12 w-12" />
      <div
        className={`relative flex h-64 w-[600px] items-center justify-center overflow-hidden border-2 border-black`}
      >
        <div className={`clip-diagonal absolute inset-0 bg-black`}></div>
        <div className="relative flex w-full items-center justify-center pt-8">
          <div>
            <div
              className={`flex size-32 items-center justify-center border-2`}
            >
              <FuriaLogo size="h-35 w-40" />
            </div>
            <div className="mt-4 text-center font-russo text-3xl font-bold text-white mix-blend-difference">
              FURIA
            </div>
          </div>
          <div className="mt-6 flex h-32 w-64 flex-col items-center justify-center font-russo">
            <div className="mt-6 text-6xl text-white mix-blend-difference">
              VS
            </div>
            <div className="mt-6 border-2 border-black p-1">
              <div className="text-center text-lg font-bold text-black">
                {nextMatch.date} - {nextMatch.time}
              </div>
              <div className="text-sm font-bold text-black">
                {nextMatch.tournament}
              </div>
            </div>
          </div>
          <div>
            <div className="flex size-32 items-center justify-center border-2 bg-black">
              <NaviLogo size="h-35 w-40" />
            </div>
            <div className="mt-4 text-center font-russo text-3xl font-bold">
              {nextMatch.opponent}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

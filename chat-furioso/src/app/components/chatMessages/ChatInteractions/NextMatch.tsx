import { FuriaLogo, NaviLogo } from '../chatMessage'

export default function FuriaChatNextMatchMessage() {
  const nextMatch = {
    date: new Date('Dec 15, 2025 14:00:00 GMT-0300'),
    opponent: 'NAVI',
    tournament: 'BLAST Premier Fall Groups 2025'
  }

  const day = nextMatch.date.getDate()
  const monthWritten =
    'de ' +
    nextMatch.date.toLocaleDateString('pt-BR', {
      month: 'long'
    })

  const fullTime =
    nextMatch.date.getHours() +
    ':' +
    nextMatch.date.getMinutes().toString().padStart(2, '0')

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
          <div className="flex h-32 w-64 flex-col items-center justify-center gap-2 font-russo">
            <div className="mt-12 w-[90%] text-center font-michroma text-sm font-bold text-white">
              {nextMatch.tournament}
            </div>
            <div className="mt-2 text-6xl text-white mix-blend-difference">
              VS
            </div>
            <div className="mb-12">
              <div className="text-center font-russo text-2xl font-bold text-black">
                {day} <a>{monthWritten}</a>
              </div>
              <div className="flex items-center justify-center font-michroma text-lg">
                {fullTime}
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

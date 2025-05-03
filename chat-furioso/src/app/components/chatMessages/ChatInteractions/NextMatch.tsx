import OpponentLogo from '../../opponents_logos'
import { FuriaLogo } from '../chatMessage'
import { NextMatchInfo } from '@/app/types/nextMatchInfo'

export default function FuriaChatNextMatchMessage(
  nextMatchInfo: NextMatchInfo
) {
  if (
    nextMatchInfo.date === null ||
    nextMatchInfo.opponent === null ||
    nextMatchInfo.tournament === null
  ) {
    return (
      <div className="flex w-full items-start justify-start">
        <div className="h-12 w-12">
          <FuriaLogo size="h-12 w-12" />
        </div>
        <div
          className={`relative flex h-64 w-[600px] items-center justify-center overflow-hidden border-2 border-black`}
        >
          A Furia não tem partidas agendadas ainda...
        </div>
      </div>
    )
  }
  const date = new Date(nextMatchInfo.date)

  const day = date.getDate()
  const monthWritten =
    'de ' +
    date.toLocaleDateString('pt-BR', {
      month: 'long'
    })

  const fullTime =
    date.getHours() + ':' + date.getMinutes().toString().padStart(2, '0')

  return (
    <div className="flex w-full items-start justify-start">
      <div className="h-12 w-12">
        <FuriaLogo size="h-12 w-12" />
      </div>
      <div
        className={`relative flex h-64 w-[600px] items-center justify-center overflow-hidden border-2 border-black`}
      >
        <div className={`clip-diagonal absolute inset-0 bg-black`}></div>
        <div className="relative flex w-full items-center justify-center pt-8">
          <div className="flex w-1/3 flex-col items-center justify-center">
            <div
              className={`flex size-28 items-center justify-center border-2`}
            >
              <FuriaLogo size="h-35 w-40" />
            </div>
            <div className="mt-4 text-center font-russo text-3xl font-bold text-white mix-blend-difference">
              FURIA
            </div>
          </div>
          <div className="flex h-32 w-64 flex-col items-center justify-center gap-2 font-russo">
            <div className="mt-12 w-[90%] text-center font-michroma text-sm font-bold text-white">
              {nextMatchInfo.tournament}
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
          <div className="flex w-1/3 flex-col items-center justify-center">
            <div className="flex size-28 items-center justify-center border-2 bg-black">
              <OpponentLogo opponent={nextMatchInfo.opponent} />
            </div>
            <div className="mt-4 text-center font-russo text-2xl font-bold">
              {nextMatchInfo.opponent}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

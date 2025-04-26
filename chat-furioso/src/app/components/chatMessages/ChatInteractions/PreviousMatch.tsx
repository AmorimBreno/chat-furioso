import { FaX } from 'react-icons/fa6'
import { FuriaLogo, NaviLogo } from '../chatMessage'

export default function FuriaChatPreviousMatchMessage({
  text
}: {
  text: string
}) {
  return (
    <div className={`flex w-full items-start justify-start`}>
      <FuriaLogo size={'h-12 w-12'} />
      <div className="flex w-[613px] flex-col">
        <div className="text-md font-michroma h-8 w-[full] bg-black pt-1 text-center text-white">
          SEMIFINAL
        </div>
        <MatchScore />
        <MapsScores />
        <MatchPlayersStats />
      </div>
    </div>
  )
}

export function MatchScore() {
  return (
    <>
      <div className="text-md font-michroma flex h-32 w-full flex-row border-2 border-black bg-white text-center text-black">
        <div className="flex-2">
          <FuriaLogo size={'h-full'} />
        </div>
        <div className="flex w-min flex-1 flex-row items-center justify-center gap-2 pb-4">
          <div className="w-full items-center justify-center text-9xl">2</div>

          <div className="pt-4">
            <FaX size={48} />
          </div>
          <div className="w-full items-center justify-center text-9xl">1</div>
        </div>
        <div className="flex-2">
          <NaviLogo size={'h-full'} />
        </div>
      </div>
    </>
  )
}

export function MapsScores() {
  function MapScore({ map, score }: { map: string; score: string }) {
    return (
      <div className="font-michroma flex h-full min-w-[20%] flex-col justify-center pb-1">
        <div className="text-md h-min text-center">{map}</div>
        <div className="flex w-full flex-row items-center justify-center gap-1 text-sm">
          <FuriaLogo size={'h-5 w-5'} />
          <div className="text-md"> {score}</div>
          <NaviLogo size={'h-5 w-5'} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="text-md flex h-14 w-full flex-row justify-between border-2 border-black bg-white px-4 text-center text-black">
        <MapScore map={'Ancient'} score={'13 - 9'} />
        <MapScore map={'Dust 2'} score={'10 - 3'} />
        <MapScore map={'Nuke'} score={'13 - 4'} />
      </div>
    </>
  )
}
export function MatchPlayersStats() {
  function PlayerStats({
    player,
    kd,
    kd_diff,
    adr,
    kast,
    rating
  }: {
    player: string
    kd: string
    kd_diff: string
    adr: string
    kast: string
    rating: string
  }) {
    return (
      <div className="flex flex-row items-center justify-between px-3">
        <div className="text-md w-1/3 text-start">{player}</div>
        <div className="w-1/6 text-xs">{kd}</div>
        <div className="w-1/6 text-xs">{kd_diff}</div>
        <div className="w-1/6 text-xs">{adr}</div>
        <div className="w-1/6 text-xs">{kast}</div>
        <div className="w-1/6 text-xs">{rating}</div>
      </div>
    )
  }

  return (
    <>
      <div className="font-michroma flex h-8 w-full flex-row items-center justify-between bg-black px-3 text-center text-xs text-white">
        <div className="text-md w-1/3">JOGADOR</div>
        <div className="w-1/6 text-xs">K/D</div>
        <div className="w-1/6 text-xs">K/D DIFF</div>
        <div className="w-1/6 text-xs">ADR</div>
        <div className="w-1/6 text-xs">KAST</div>
        <div className="w-1/6 text-xs">RATING</div>
      </div>
      <div className="text-md font-michroma h-32 w-full flex-col justify-between border-2 border-black bg-white text-center text-black">
        <PlayerStats
          player={'Yuurih'}
          kd={'20 - 12'}
          kd_diff={'+8'}
          adr={'101.65'}
          kast={'70%'}
          rating={'1.25'}
        />
        <PlayerStats
          player={'KSCERATO'}
          kd={'20 - 12'}
          kd_diff={'-6'}
          adr={'80.0'}
          kast={'70%'}
          rating={'1.25'}
        />
        <PlayerStats
          player={'FalleN'}
          kd={'20 - 12'}
          kd_diff={'-8'}
          adr={'75.90'}
          kast={'70%'}
          rating={'1.25'}
        />
        <PlayerStats
          player={'molodoy'}
          kd={'20 - 12'}
          kd_diff={'-8'}
          adr={'80.0'}
          kast={'70%'}
          rating={'1.25'}
        />
        <PlayerStats
          player={'YEKINDAR'}
          kd={'20 - 12'}
          kd_diff={'-8'}
          adr={'80.0'}
          kast={'70%'}
          rating={'1.25'}
        />
      </div>
    </>
  )
}

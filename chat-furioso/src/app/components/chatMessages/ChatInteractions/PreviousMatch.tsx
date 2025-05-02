import { FaX } from 'react-icons/fa6'
import { FuriaLogo, NaviLogo } from '../chatMessage'
import { PrevMatchInfo } from '@/app/types/prevMatch'

export default function FuriaChatPreviousMatchMessage(
  prevMatchInfo: PrevMatchInfo
) {
  if (prevMatchInfo === undefined) {
    return (
      <div className={`flex w-full items-start justify-start`}>
        <FuriaLogo size={'h-12 w-12'} />
        <div className="flex w-[613px] items-center justify-center">
          Nao foi possivel obter dados de partida...
        </div>
      </div>
    )
  }

  return (
    <div className={`flex w-full items-start justify-start`}>
      <FuriaLogo size={'h-12 w-12'} />
      <div className="flex w-[613px] flex-col">
        <div className="text-md h-8 w-[full] bg-black pt-1 text-center font-michroma text-white">
          ÚLTIMA PARTIDA
        </div>
        <MatchScore
          finalScore={prevMatchInfo.finalScore}
          opponent={prevMatchInfo.opponent}
          maps={prevMatchInfo.maps}
          players={prevMatchInfo.players}
        />
        <MapsScores
          finalScore={prevMatchInfo.finalScore}
          opponent={prevMatchInfo.opponent}
          maps={prevMatchInfo.maps}
          players={prevMatchInfo.players}
        />
        <MatchPlayersStats
          finalScore={prevMatchInfo.finalScore}
          opponent={prevMatchInfo.opponent}
          maps={prevMatchInfo.maps}
          players={prevMatchInfo.players}
        />
      </div>
    </div>
  )
}

export function MatchScore(prevMatchInfo: PrevMatchInfo) {
  return (
    <>
      <div className="text-md flex h-32 w-full flex-row border-2 border-black bg-white text-center font-michroma text-black">
        <div className="flex-2">
          <FuriaLogo size={'h-full'} />
        </div>
        <div className="flex w-min flex-1 flex-row items-center justify-center gap-2 pb-4">
          <div className="w-full items-center justify-center text-9xl">
            {prevMatchInfo.finalScore.charAt(0)}
          </div>

          <div className="pt-4">
            <FaX size={48} />
          </div>
          <div className="w-full items-center justify-center text-9xl">
            {prevMatchInfo.finalScore.charAt(2)}
          </div>
        </div>
        <div className="flex-2">
          <NaviLogo size={'h-full'} />
        </div>
      </div>
    </>
  )
}

export function MapsScores(prevMatchinfo: PrevMatchInfo) {
  function MapScore({ map, score }: { map: string; score: string }) {
    return (
      <div className="flex h-full min-w-[20%] flex-col justify-center pb-1 font-michroma">
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
        {prevMatchinfo.maps.map((map, index) => {
          return <MapScore key={index} map={map.map} score={map.score} />
        })}
      </div>
    </>
  )
}
export function MatchPlayersStats(prevMatchInfo: PrevMatchInfo) {
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
      <div className="flex h-8 w-full flex-row items-center justify-between bg-black px-3 text-center font-michroma text-xs text-white">
        <div className="text-md w-1/3">JOGADOR</div>
        <div className="w-1/6 text-xs">K/D</div>
        <div className="w-1/6 text-xs">K/D DIFF</div>
        <div className="w-1/6 text-xs">ADR</div>
        <div className="w-1/6 text-xs">KAST</div>
        <div className="w-1/6 text-xs">RATING</div>
      </div>
      <div className="text-md h-32 w-full flex-col justify-between border-2 border-black bg-white text-center font-michroma text-black">
        {prevMatchInfo.players.map((player, index) => {
          return (
            <PlayerStats
              key={index}
              player={player.name}
              kd={player.kd}
              kd_diff={player.kd_diff}
              adr={player.adr}
              kast={player.kast}
              rating={player.rating}
            />
          )
        })}
      </div>
    </>
  )
}

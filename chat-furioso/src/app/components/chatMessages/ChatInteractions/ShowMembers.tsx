import { FuriaLogo } from '../chatMessage'
import FallenImage from '/assets/fallen_image.png'
import KasceratoImage from '/assets/kascerato_image.jpg'
import MolodoyImage from '/assets/molodoy_image.jpg'
import YekindarImage from '/assets/yekindar_image.jpg'
import YurihImage from '/assets/yurih_image.jpg'

export default function FuriaChatShowMembersMessage() {
  return (
    <div className={`flex w-full items-start justify-start`}>
      <FuriaLogo size={'h-12 w-12'} />

      <div className="flex w-max flex-col border-2 border-black bg-white p-2">
        <div className="mb-2 flex h-20 w-full items-center justify-center gap-2 bg-black pr-12 text-center font-russo text-5xl leading-10 tracking-widest text-white">
          <div>NOSSO</div>
          <FuriaLogo size={'h-12 w-12'} />
          <div
            className="pl-2 text-transparent"
            style={{
              WebkitTextStroke: '1px white'
            }}
          >
            TIME
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <PlayerCard name="Yurih" image={YurihImage} />
          <PlayerCard name="Fallen" image={FallenImage} />
          <PlayerCard name="Kascerato" image={KasceratoImage} />
          <PlayerCard name="Molodoy" image={MolodoyImage} />
          <PlayerCard name="Yekindar" image={YekindarImage} />
        </div>
      </div>
    </div>
  )
}

export function PlayerCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="relative h-96 w-32">
      <img src={image} className="h-full transform object-cover"></img>
      <div className="absolute bottom-0 flex h-full w-full flex-col items-center justify-end bg-gradient-to-t from-black to-transparent pb-4">
        <div className="w-full rotate-180 [writing-mode:vertical-lr]">
          <h1 className="flex w-full items-start justify-end font-russo text-4xl text-white">
            {name.slice(0, name.length / 2)}
            <a
              className="text-transparent"
              style={{
                WebkitTextStroke: '0.5px white'
              }}
            >
              {name.slice(name.length / 2, name.length)}
            </a>
          </h1>
        </div>
      </div>
    </div>
  )
}

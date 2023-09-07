import { HeartButton } from '@/components/HeartButton'
import { Levels } from '@/components/Levels'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative h-screen bg-primary-200 text-dark">
      <div className="mx-auto flex max-w-md items-center justify-between">
        <button
          type="button"
          className="m-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 shadow-[0px_2px_4px_0px_rgba(59,_171,_30,_0.25)]"
        >
          <ArrowLeft />
        </button>
        <HeartButton />
      </div>
      <div className="absolute bottom-0 left-1/2 top-28 w-full max-w-md -translate-x-1/2 rounded-t-3xl bg-white px-8 pb-8">
        <Image
          src="/dish-image.png"
          width={280}
          height={280}
          alt=""
          className="mx-auto -mt-20"
        />
        <h1 className="mt-6 text-center text-2xl font-semibold">
          Salada variada
        </h1>
        <div className="mx-auto my-8 flex max-w-md items-center justify-around">
          <div>
            <span className="text-center text-sm font-semibold">Energia</span>
            <p className="text-center">221,15 kcal</p>
          </div>
          <div>
            <span className="text-center text-sm font-semibold">
              Porção total
            </span>
            <p className="text-center">240 g</p>
          </div>
        </div>
        <div className="space-y-4">
          <Levels name="Proteínas" quantity="15,13 g" />
          <Levels name="Carboidratos" quantity="18,40 g" />
          <Levels name="Açúcar" quantity="4,88 g" />
          <Levels name="Gorduras" quantity="5,18 g" />
        </div>
        <button
          type="button"
          className="mx-auto mt-8 flex h-14 w-full max-w-md items-center justify-center rounded-2xl bg-primary-500 text-white"
        >
          Mais detalhes
        </button>
      </div>
    </div>
  )
}

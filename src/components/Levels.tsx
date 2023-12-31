type LevelsProps = {
  name: string
  quantity: string
}

export function Levels({ name, quantity }: LevelsProps) {
  return (
    <div className="mx-auto grid max-w-md gap-y-3">
      <span className="text-sm font-semibold">{name}</span>
      <span className="place-self-end text-sm">{quantity}</span>
      <div className="col-span-2 grid grid-cols-6 gap-2">
        <div className="h-2 rounded-full bg-primary-500"></div>
        <div className="h-2 rounded-full bg-primary-500"></div>
        <div className="h-2 rounded-full bg-primary-500"></div>
        <div className="h-2 rounded-full bg-primary-200"></div>
        <div className="h-2 rounded-full bg-primary-200"></div>
        <div className="h-2 rounded-full bg-primary-200"></div>
      </div>
    </div>
  )
}

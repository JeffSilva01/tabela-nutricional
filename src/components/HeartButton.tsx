'use client'
import { Heart } from 'lucide-react'
import { useState } from 'react'

export function HeartButton() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setIsLiked(!isLiked)}
      className="m-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 shadow-[0px_2px_4px_0px_rgba(59,_171,_30,_0.25)]"
    >
      {isLiked ? <Heart fill="" /> : <Heart />}
    </button>
  )
}

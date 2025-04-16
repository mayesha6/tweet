// components/LikeButton.js
'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

export default function LikeButton() {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => setLiked(!liked)

  return (
    <button onClick={toggleLike} aria-label="Like">
      <Heart
        className={`h-[18px] w-[18px] transition-colors duration-300 ${
          liked ? 'text-[#ED6923] fill-[#ED6923]' : 'text-[#262626]'
        }`}
      />
    </button>
  )
}

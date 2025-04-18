// components/LikeButton.js
'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

const LikeButton = ({btnColor}) => {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => setLiked(!liked)

  return (
    <button onClick={toggleLike} aria-label="Like">
      <Heart
        className={`h-[18px] w-[18px] transition-colors duration-300 cursor-pointer ${
          liked ? `text-[#ED6923] fill-[#ED6923]` : `text-[${btnColor}]`
        }`}
      />
    </button>
  )
}

export default LikeButton
// [#262626]

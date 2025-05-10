'use client'

import { animate, stagger } from 'motion'
import { splitText } from 'motion-plus'
import { useEffect, useRef } from 'react'

export default function SplitHeading({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!ref.current) return

      ref.current.style.visibility = 'visible'

      const { words } = splitText(ref.current)

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      )
    })
  }, [])

  return (
    <>
      <h2
        className="text-4xl mt-10 font-[Preahvihear] text-white leading-snug"
        ref={ref}
        style={{ visibility: 'hidden' }}
      >
        {children}
      </h2>

      <style>{`
        .split-word {
          will-change: transform, opacity;
        }
      `}</style>
    </>
  )
}

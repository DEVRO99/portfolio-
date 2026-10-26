import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingTextProps {
  texts: string[]
  speed?: number
  pauseDuration?: number
  className?: string
}

export function TypingText({
  texts,
  speed = 80,
  pauseDuration = 2000,
  className,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)

          if (charIndex + 1 === currentText.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          setDisplayText(currentText.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)

          if (charIndex - 1 === 0) {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, pauseDuration])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[1em] bg-neon-blue ml-1 align-middle"
      />
    </span>
  )
}

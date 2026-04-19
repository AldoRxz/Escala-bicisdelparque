"use client"

import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({ end, suffix = "", duration = 2000, className = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            
            const startTime = performance.now()
            const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const easedProgress = easeOutQuart(progress)
              const currentValue = Math.floor(easedProgress * end)

              setCount(currentValue)

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(end)
              }
            }

            requestAnimationFrame(animate)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

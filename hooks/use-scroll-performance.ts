import { useEffect, useRef, useState } from 'react'

interface UseScrollPerformanceOptions {
  threshold?: number
  passive?: boolean
  throttleMs?: number
}

export function useScrollPerformance(options: UseScrollPerformanceOptions = {}) {
  const { threshold = 0.5, passive = true, throttleMs = 16 } = options
  const [isScrolled, setIsScrolled] = useState(false)
  const ticking = useRef(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const thresholdHeight = window.innerHeight * threshold
          
          setIsScrolled(currentScrollY > thresholdHeight)
          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold, passive])

  return { isScrolled, scrollY: lastScrollY.current }
}

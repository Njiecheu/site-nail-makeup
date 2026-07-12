import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi'

const BackToTop = () => {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const doc = document.documentElement
      const scrollHeight = doc.scrollHeight - window.innerHeight
      const scrolled = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, scrolled)))
      setVisible(scrollY > 10)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const size = 48
  const r = 18
  const circumference = 2 * Math.PI * r
  const offset = circumference - (progress / 100) * circumference

  return (
    <button
      aria-label="Back to top"
      onClick={handleClick}
      className={`fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
        <defs></defs>
        <g transform={`translate(${size/2}, ${size/2})`}>
          <circle r={r} fill="none" stroke="#fce7f3" strokeWidth="4" />
          <circle
            r={r}
            fill="none"
            stroke="#ec4899"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 150ms linear' }}
          />
        </g>
      </svg>

      <span className="relative z-10 text-pink-600">
        <HiArrowUp className="h-5 w-5" />
      </span>
    </button>
  )
}

export default BackToTop

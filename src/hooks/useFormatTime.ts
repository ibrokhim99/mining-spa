import { useEffect, useState } from "react"

export default function useFormatTime(duration: number) {
  const [timer, setTimer] = useState(duration)
  const [isEqualToZero, setEqualToZero] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1
        }
        setEqualToZero(true)
        clearInterval(interval)
        return 0
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`
  }

  return { timer: formatTime(timer), setTimer, isEqualToZero }
}

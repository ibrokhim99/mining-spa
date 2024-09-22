import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type Props = {
  duration?: number
}

const formatTime = (time: number) => time.toString().padStart(2, "0")

const calculateTimeLeft = (endTime: number) => {
  const timeDiff = endTime - new Date().getTime()
  if (timeDiff <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 }
  }

  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
  return { hours, minutes, seconds }
}

export const Timer = ({ duration }: Props) => {
  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    if (duration) {
      const startTime = new Date().getTime()
      const totalDurationMillis = duration * 60 * 1000
      const endTime = startTime + totalDurationMillis

      const updateTimer = () => setTimer(calculateTimeLeft(endTime))

      updateTimer()
      const interval = setInterval(updateTimer, 1000)

      return () => clearInterval(interval)
    }
  }, [duration])

  const isTimeLow = timer.hours === 0 && timer.minutes < 5

  return (
    <div className="group w-32 text-start">
      <div
        className={cn(
          "hidden group-hover:flex items-center gap-0.5 space-x-0.5 text-foreground",
          { "text-red-600": isTimeLow },
        )}>
        <span className="text-lg">
          {formatTime(timer.minutes)} : {formatTime(timer.seconds)}
        </span>
        left
      </div>
      <div
        className={cn("text-foreground group-hover:hidden", {
          "text-red-600": isTimeLow,
        })}>
        <span className="text-lg">
          {formatTime(timer.minutes === 0 ? timer.minutes : timer.minutes + 1)}
        </span>{" "}
        minutes left
      </div>
    </div>
  )
}

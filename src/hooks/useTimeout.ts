import { useEffect, useRef } from "react"

const useTimeout = (duration: number, callback: () => void) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (duration <= 0) return

    const timer = setTimeout(
      () => {
        callbackRef.current()
      },
      duration * 60 * 1000,
    )

    return () => clearTimeout(timer)
  }, [duration])
}

export default useTimeout

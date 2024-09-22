import { useEffect, useState } from "react"

import { checkIsServer } from "../lib/checkIsServer"

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: checkIsServer() ? 0 : window.innerWidth,
    height: checkIsServer() ? 0 : window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowSize
}

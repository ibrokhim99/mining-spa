import { useContext, useEffect, useRef, useState } from "react"

import Image from "next/image"

import { VolumeContext } from "@/providers/volume"

const Audio = () => {
  const { volume, setVolume } = useContext(VolumeContext)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [dragging, setDragging] = useState(false)

  const updateVolume = (clientX: number) => {
    if (!sliderRef.current) return

    const sliderRect = sliderRef.current.getBoundingClientRect()
    const newLeft = Math.min(
      Math.max(0, clientX - sliderRect.left),
      sliderRect.width,
    )
    const newVolume = Math.round((newLeft / sliderRect.width) * 100)
    setVolume(newVolume)
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault()
    setDragging(true)
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (dragging) {
        updateVolume(event.clientX)
      }
    }
    const handleMouseUp = () => setDragging(false)

    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging])

  return (
    <div className="flex items-center space-x-2">
      <Image src="/volume.png" alt="volume" width={16} height={16} />
      <div
        ref={sliderRef}
        className="relative w-14 h-2.5 bg-white border border-[#aaa] rounded-sm"
        onClick={(e) => updateVolume(e.clientX)}>
        <span
          className="absolute top-0 right-0 h-full bg-[#e2e2e2] rounded-sm"
          style={{ width: `${100 - volume}%` }}
        />
        <span
          className="absolute w-3.5 h-3.5 -top-[3px] -ml-2 bg-[#e6e6e6] border border-[#d3d3d3] rounded-sm hover:bg-[#dadada] hover:border-[#999] z-10"
          style={{ left: `${volume}%` }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  )
}

export default Audio

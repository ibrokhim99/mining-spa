import { ReactNode, createContext, useMemo, useState } from "react"

interface IContext {
  volume: number
  setVolume: (state: number) => void
}

export const VolumeContext = createContext<IContext>({
  volume: 50,
  setVolume: () => null,
})

export const VolumeProvider = ({ children }: { children: ReactNode }) => {
  const [volume, setVolume] = useState(50)

  const contextValue = useMemo(
    () => ({ volume, setVolume }),
    [volume, setVolume],
  )

  return (
    <VolumeContext.Provider value={contextValue}>
      {children}
    </VolumeContext.Provider>
  )
}

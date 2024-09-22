import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getSpeaking } from "../adapter"
import { GetSpeakingShuffle } from "../api"

export const useSpeakingShuffle = () => {
  const initialData = {
    data: getSpeaking(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["speaking-shuffle"],
    queryFn: () => GetSpeakingShuffle(),
    select: (data) => ({
      data: getSpeaking(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

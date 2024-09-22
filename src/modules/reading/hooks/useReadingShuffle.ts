import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getReadingShuffle } from "../adapter"
import { GetReadingShuffle } from "../api"

export const useReadingShuffle = () => {
  const initialData = {
    data: getReadingShuffle(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["reading-shuffle"],
    queryFn: () => GetReadingShuffle(),
    select: (data) => ({
      data: getReadingShuffle(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

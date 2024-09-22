import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getListeningShuffle } from "../adapter"
import { GetListeningShuffle } from "../api"

export const useListeningShuffle = () => {
  const initialData = {
    data: getListeningShuffle(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["listening-shuffle"],
    queryFn: () => GetListeningShuffle(),
    select: (data) => ({
      data: getListeningShuffle(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

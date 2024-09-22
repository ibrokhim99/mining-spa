import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getWritingParts } from "../adapter"
import { GetWritingParts } from "../api"

export const useWritingParts = () => {
  const initialData = {
    data: getWritingParts(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["writing-parts"],
    queryFn: () => GetWritingParts(),
    select: (data) => ({
      data: getWritingParts(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getReadingSubmissons } from "../adapter"
import { GetSubmissonsAll } from "../api"

export const useReadingSubmissons = () => {
  const initialData = {
    data: getReadingSubmissons(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["reading-submissons"],
    queryFn: () => GetSubmissonsAll(),
    select: (data) => ({
      data: getReadingSubmissons(get(data, "data.data")),
    }),
    retry: 0,
  })

  return {
    ...data,
    ...args,
  }
}

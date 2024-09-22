import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getListeningSubmissons } from "../adapter"
import { GetSubmissonsAll } from "../api"

export const useListeningSubmissons = () => {
  const initialData = {
    data: getListeningSubmissons(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["listening-submissons"],
    queryFn: () => GetSubmissonsAll(),
    select: (data) => ({
      data: getListeningSubmissons(get(data, "data.data")),
    }),
    retry: 0,
  })

  return {
    ...data,
    ...args,
  }
}

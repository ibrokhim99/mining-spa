import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getSubmissonsActives } from "../adapter"
import { GetSubmissonsActive } from "../api"

export const useSubmissonActive = () => {
  const initialData = {
    data: getSubmissonsActives(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["writing-submissons-active"],
    queryFn: () => GetSubmissonsActive(),
    select: (data) => ({
      data: getSubmissonsActives(get(data, "data.data")),
    }),
    retry: 0,
  })

  return {
    ...data,
    ...args,
  }
}

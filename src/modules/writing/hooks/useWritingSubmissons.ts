import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getSubmissonsActives } from "../adapter"
import { GetSubmissonsAll } from "../api"

export const useWritingSubmissons = () => {
  const initialData = {
    data: getSubmissonsActives(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["writing-submissons"],
    queryFn: () => GetSubmissonsAll(),
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

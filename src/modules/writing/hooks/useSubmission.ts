import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getSubmissonsActive } from "../adapter"
import { GetSubmissonsDetail } from "../api"

export const useSubmisson = (id: string) => {
  const initialData = {
    data: getSubmissonsActive(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["writing-submissons-id"],
    queryFn: () => GetSubmissonsDetail(id),
    select: (data) => ({
      data: getSubmissonsActive(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

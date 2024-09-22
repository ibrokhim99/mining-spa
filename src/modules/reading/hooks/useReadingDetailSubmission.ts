import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getDetailSubmission } from "../adapter"
import { GetSubmissonsDetail } from "../api"

export const useReadingSubmissonDetail = (id: string) => {
  const initialData = {
    data: getDetailSubmission(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["reading-submissons-id"],
    queryFn: () => GetSubmissonsDetail(id),
    select: (data) => ({
      data: getDetailSubmission(get(data, "data.data.submission")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

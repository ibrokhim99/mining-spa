import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getSubmission } from "../adapter"
import { GetSubmissonsDetail } from "../api"

export const useListeningSubmissonDetail = (id: string) => {
  const initialData = {
    data: getSubmission(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["listening-submissons-id"],
    queryFn: () => GetSubmissonsDetail(id),
    select: (data) => ({
      data: getSubmission(get(data, "data.data.submission[0]")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

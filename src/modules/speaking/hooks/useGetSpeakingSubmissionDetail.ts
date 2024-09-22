import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getUserDetailSpeaking } from "../adapter"
import { GetSpeakingSubmissionDetails } from "../api"

export const useGetSubmissionDetail = (id: string) => {
  const initialData = {
    data: getUserDetailSpeaking(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["speaking-submission-id"],
    queryFn: () => GetSpeakingSubmissionDetails(id),
    select: (data) => ({
      data: getUserDetailSpeaking(get(data, "data.data")),
    }),
    retry: 0,
  })

  return {
    ...data,
    ...args,
  }
}

import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getUserSpeakingSubmission } from "../adapter"
import { GetSpeakingSubmission } from "../api"

export const useUserSubmission = () => {
  const initialData = {
    data: getUserSpeakingSubmission(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["speaking-submission"],
    queryFn: () => GetSpeakingSubmission(),
    select: (data) => ({
      data: getUserSpeakingSubmission(get(data, "data.data")),
    }),
    retry: 0,
  })

  return {
    ...data,
    ...args,
  }
}

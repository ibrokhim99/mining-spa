import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getAIAnalysis } from "../adapter"
import { GetAIAnalysis } from "../api"

export const useAIAnalysis = (id: string) => {
  const initialData = {
    data: getAIAnalysis(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["ai_analysis", id],
    queryFn: () => GetAIAnalysis(id),
    select: (data) => ({
      data: getAIAnalysis(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

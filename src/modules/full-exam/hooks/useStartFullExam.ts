import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getFullExam } from "../adapter"
import { StartFullExam } from "../api"

export const useStartFullExam = () => {
  const initData = {
    data: getFullExam(),
  }
  const { data = initData, ...args } = useQuery({
    queryKey: ["full_exam"],
    queryFn: () => StartFullExam(),
    select: (data) => ({
      data: getFullExam(get(data, "data")),
    }),
  })
  return {
    ...data,
    ...args,
  }
}

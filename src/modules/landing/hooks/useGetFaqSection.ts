import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getFaqSection } from "../adapter"
import { GetFaqSection } from "../api"

export const useGetFaqSection = () => {
  const initialData = {
    data: getFaqSection(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["faq-section"],
    queryFn: () => GetFaqSection(),
    select: (data) => ({
      data: getFaqSection(get(data, "data.data.attributes")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

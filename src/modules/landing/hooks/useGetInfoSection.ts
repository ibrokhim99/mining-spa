import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getInfoSection } from "../adapter"
import { GetInfoSection } from "../api"

export const useGetInfoSection = () => {
  const initialData = {
    data: getInfoSection(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["info-section"],
    queryFn: () => GetInfoSection(),
    select: (data) => ({
      data: getInfoSection(get(data, "data.data.attributes")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

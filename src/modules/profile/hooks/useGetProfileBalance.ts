import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getProfileBalance } from "../adapter"
import { GetProfileBalance } from "../api"

export const useProfileBalance = () => {
  const initialData = {
    data: getProfileBalance(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["profile-balance"],
    queryFn: () => GetProfileBalance(),
    select: (data) => ({
      data: getProfileBalance(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

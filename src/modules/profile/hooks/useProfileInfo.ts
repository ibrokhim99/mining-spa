import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getProfileInfo } from "../adapter"
import { GetProfileInfo } from "../api"

export const useProfileInfo = () => {
  const initialData = {
    data: getProfileInfo(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["profile-info"],
    queryFn: () => GetProfileInfo(),
    select: (data) => ({
      data: getProfileInfo(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

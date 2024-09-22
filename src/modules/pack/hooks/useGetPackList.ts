import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getPackList } from "../adapter"
import { GetPack } from "../api"

export const useGetPackList = () => {
  const initialData = {
    data: getPackList(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["pack_list"],
    queryFn: () => GetPack(),
    select: (data) => ({
      data: getPackList(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

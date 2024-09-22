import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getListeningShuffle } from "../adapter"
import { GetListeningTest } from "../api"

interface IProps {
  id: string | string[]
}

export const useListeningTest = ({ id }: IProps) => {
  const initialData = {
    data: getListeningShuffle(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["listening-shuffle"],
    queryFn: () => GetListeningTest(id),
    select: (data) => ({
      data: getListeningShuffle(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

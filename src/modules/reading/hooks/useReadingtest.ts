import { useQuery } from "@tanstack/react-query"
import { get } from "lodash"

import { getReadingShuffle } from "../adapter"
import { GetReadingShuffle, GetReadingTest } from "../api"

interface IProps {
  id: string | string[]
}

export const useReadingTest = ({ id }: IProps) => {
  const initialData = {
    data: getReadingShuffle(),
  }
  const { data = initialData, ...args } = useQuery({
    queryKey: ["reading-shuffle"],
    queryFn: () => GetReadingTest(id),
    select: (data) => ({
      data: getReadingShuffle(get(data, "data.data")),
    }),
  })

  return {
    ...data,
    ...args,
  }
}

import { Pack } from "./type"

export const getPack = (item?: Pack) => {
  return {
    _id: item?._id ?? "",
    title: item?.title ?? "",
    full_exam_count: item?.full_exam_count ?? 0,
    listening_count: item?.listening_count ?? 0,
    reading_count: item?.reading_count ?? 0,
    writing_count: item?.writing_count ?? 0,
    speaking_count: item?.speaking_count ?? 0,
    price: item?.price ?? 0,
  }
}

export const getPackList = (data?: Pack[]) => {
  return data?.length
    ? data.map((item) => {
        return getPack(item)
      })
    : []
}

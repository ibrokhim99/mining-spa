import { IProfile, IProfileBalance } from "./types"

export const getProfileInfo = (item?: IProfile) => {
  return {
    _id: item?._id ?? "",
    fio: item?.fio ?? "",
    phone: item?.phone ?? "",
    date_of_birth: item?.date_of_birth ?? undefined,
    candidate_number: item?.candidate_number ?? 0,
    role: item?.role ?? "student",
    coupon: item?.coupon?.code ?? "",
    estimated_exam_date: item?.estimated_exam_date ?? "",
    target_source: item?.target_source ?? "",
  }
}
export const getProfileBalance = (item?: IProfileBalance) => {
  return {
    user: item?.user,
    full_exam_count: item?.full_exam_count,
    listening_count: item?.listening_count,
    reading_count: item?.reading_count,
    writing_count: item?.writing_count,
    speaking_count: item?.speaking_count,
  }
}

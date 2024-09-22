import { IProfile, IProfileBalance, IProfileDetail } from "./types"
import http from "@/services/api"

export const GetProfileInfo = async () => {
  return await http.get<{ data: IProfile }>(`/profile/me/`)
}

export const EditProfileDetail = async (values: IProfileDetail) => {
  return await http.patch(`/profile/`, values)
}
export const GetProfileBalance = async () => {
  return await http.get<{ data: IProfileBalance }>(`profile/my-balance`)
}

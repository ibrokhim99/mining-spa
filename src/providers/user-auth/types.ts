import { Role } from "@/modules/auth/types"

export type UserInfo = {
  fio: string
  role: Role
  phone: string
  password: string
  code_hash: string
}

export type UserPhoneHash = {
  phone: string
  code_hash: string
}

export type UserAuthContextValue = {
  userInfo: UserInfo | null
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>
  userPhoneHash: UserPhoneHash | null
  setUserPhoneHash: React.Dispatch<React.SetStateAction<UserPhoneHash | null>>
}

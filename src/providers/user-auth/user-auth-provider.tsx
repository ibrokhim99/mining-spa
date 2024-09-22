"use client"

import { createContext, useMemo, useState } from "react"

import type { UserAuthContextValue, UserInfo, UserPhoneHash } from "./types"

type Props = {
  children: React.ReactNode
}

export const UserAuthContext = createContext<UserAuthContextValue | undefined>(
  undefined,
)

export const UserAuthConsumer = UserAuthContext.Consumer

export const UserAuthProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [userPhoneHash, setUserPhoneHash] = useState<UserPhoneHash | null>(null)
  const value = useMemo(
    () => ({ userInfo, setUserInfo, userPhoneHash, setUserPhoneHash }),
    [userInfo, setUserInfo, userPhoneHash, setUserPhoneHash],
  )

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  )
}

"use server"

import { cookies } from "next/headers"

export async function setAccessToken(token: string) {
  cookies().set({
    name: "access_token",
    value: token,
    httpOnly: true,
  })
}

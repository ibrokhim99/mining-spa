"use server"

import { cookies } from "next/headers"

export async function deleteAccessToken() {
  cookies().delete("access_token")
}

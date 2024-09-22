import axios from "axios"

import { Pack } from "./type"
import http from "@/services/api"

export const GetPack = async () => {
  return await http.get<{ data: Pack[] }>(`/ielts-exam-pack/`)
}

export const PostPack = async (base64: string) => {
  return await axios.post(`https://payme.uz/api/p2p.create`, {
    method: "p2p.create",
    params: {
      amount: 100000,
      currency: 860,
      description: "xj",
      number: "8600312972112367",
    },
  })
}

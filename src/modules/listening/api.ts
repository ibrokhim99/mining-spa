import { ListeningInput, ListeningShuffle } from "./types"
import http from "@/services/api"

export const GetListeningShuffle = async () => {
  return await http.get<ListeningShuffle>(`/ielts-listening/shuffle/`)
}
export const GetListeningTest = async (id: string | string[]) => {
  return await http.get<ListeningShuffle>(`ielts-listening/${id}`)
}
export const GetSubmissonsAll = async () => {
  return await http.get(`/ielts-listening-submissions/my-submissions`)
}

export const GetSubmissonsDetail = async (id: string) => {
  return await http.get(`/ielts-listening-submissions/${id}`)
}

export const CreateSubmission = async (values: ListeningInput) => {
  return await http.post(`/ielts-listening-submissions`, values)
}

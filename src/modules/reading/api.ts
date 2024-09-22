import { ReadingInput, ReadingShuffle } from "./types"
import http from "@/services/api"

export const GetReadingShuffle = async () => {
  return await http.get<ReadingShuffle>(`/ielts-reading/shuffle/`)
}

export const GetReadingTest = async (id: string | string[]) => {
  return await http.get<ReadingShuffle>(`/ielts-reading/${id}`)
}

export const GetSubmissonsAll = async () => {
  return await http.get(`/ielts-reading-submissions/my-submissions`)
}

export const GetSubmissonsDetail = async (id: string) => {
  return await http.get(`/ielts-reading-submissions/${id}`)
}

export const CreateSubmission = async (values: ReadingInput) => {
  return await http.post(`/ielts-reading-submissions`, values)
}

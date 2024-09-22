import { SubmissionsActive, Writing, WritingPartsInput } from "./types"
import http from "@/services/api"

export const GetWritingParts = async () => {
  return await http.get<Writing>(`/writing/shuffle/`)
}

export const GetSubmissonsActive = async () => {
  return await http.get<SubmissionsActive>(`/ielts-writing-submissions/active`)
}

export const GetSubmissonsAll = async () => {
  return await http.get<SubmissionsActive>(
    `/ielts-writing-submissions/all/my-submissions`,
  )
}

export const GetSubmissonsDetail = async (id: string) => {
  return await http.get<SubmissionsActive>(`/ielts-writing-submissions/${id}`)
}

export const CreateParts = async (values: WritingPartsInput) => {
  return await http.post(`/ielts-writing-submissions`, values, {
    params: { model_type: "gpt-4o", prompt_type: "" },
  })
}

export const GetAIAnalysis = async (id: string) => {
  return await http.get(`/ai-analysis/${id}`)
}

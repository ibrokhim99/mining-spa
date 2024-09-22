import {
  GetUserSpeakingSubmission,
  Speaking,
  SpeakingSubmission,
} from "./types"
import http from "@/services/api"

export const GetSpeakingShuffle = async () => {
  return await http.get<Speaking>(`/ielts-speaking/shuffle/`)
}

export const CreateSpeakingSubmission = async (values: SpeakingSubmission) => {
  return await http.post(`/ielts-speaking-submissions`, values)
}

export const GetSpeakingSubmission = async () => {
  return await http.get<GetUserSpeakingSubmission>(
    `/ielts-speaking-submissions/active`,
  )
}
export const GetSpeakingSubmissionDetails = async (id: string) => {
  return await http.get<GetUserSpeakingSubmission>(
    `ielts-speaking-submissions/${id}`,
  )
}

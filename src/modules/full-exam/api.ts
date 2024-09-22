import { ListeningInput } from "../listening/types"
import { ReadingInput } from "../reading/types"
import { SpeakingSubmission } from "../speaking/types"
import { WritingPartsInput } from "../writing/types"

import http from "@/services/api"

export const StartFullExam = async () => {
  return await http.post(`ielts-full-exam/start`)
}
export const FullExamListening = async (values: ListeningInput) => {
  return await http.post(`ielts-full-exam/submit/listening`, values)
}

export const FullExamReadingSubmission = async (values: ReadingInput) => {
  return await http.post(`ielts-full-exam/submit/reading`, values)
}

export const FullExamWritingSubmission = async (values: WritingPartsInput) => {
  return await http.post(`ielts-full-exam/submit/writing`, values)
}

export const FullExamSpeakingSubmission = async (
  values: SpeakingSubmission,
) => {
  return await http.post(`ielts-full-exam/submit/speaking`, values)
}

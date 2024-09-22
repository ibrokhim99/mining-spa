export interface SpeakingPartsQuestions {
  audio: string
  text: string
}

export interface SpeakingSubmissionQuestion {
  audio: File
  question: string
}

export interface SpeakingParts {
  _id: string
  title: string
  part: number
  questions: SpeakingPartsQuestions[]
  parent_part: string
}

export interface Speaking {
  part_one: SpeakingParts
  part_two: SpeakingParts
  part_three: SpeakingParts
}

export interface SpeakingSubmission {
  part_one: string
  part_two: string
  part_three: string
  part_one_user_inputs: SpeakingSubmissionQuestion[]
  part_two_user_inputs: SpeakingSubmissionQuestion[]
  part_three_user_inputs: SpeakingSubmissionQuestion[]
}

export interface Userinput {
  audio: string
  audio_to_text: string
  question: string
}
export interface AiSpeakingAnalysis {
  _id: string
  ielts_speaking_submission: string
  ai_response: string
}
export interface UserSpeakingSubmission {
  _id: string
  part_one: SpeakingParts
  part_two: SpeakingParts
  part_three: SpeakingParts
  part_one_user_inputs: Userinput
  part_two_user_inputs: Userinput
  part_three_user_inputs: Userinput
  created_at: Date
}

export interface GetUserSpeakingSubmission {
  analysis: AiSpeakingAnalysis
  submission: UserSpeakingSubmission
}

export interface GetUserSpeakingSubmisstionDetail {
  ai_analysis: AiSpeakingAnalysis
  submission: UserSpeakingSubmission
}

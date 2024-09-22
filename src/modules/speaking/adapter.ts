import {
  AiSpeakingAnalysis,
  GetUserSpeakingSubmission,
  GetUserSpeakingSubmisstionDetail,
  Speaking,
  SpeakingParts,
  SpeakingPartsQuestions,
  UserSpeakingSubmission,
  Userinput,
} from "./types"

const getSpeakingQuestions = (item?: SpeakingPartsQuestions) => {
  return {
    audio: item?.audio ?? "",
    text: item?.text ?? "",
  }
}

export const getSpeakingPart = (item?: SpeakingParts) => {
  return {
    _id: item?._id ?? "",
    title: item?.title ?? "",
    part: item?.part ?? 0,
    questions: item?.questions.map((item) => getSpeakingQuestions(item)) ?? [],
    parent_part: item?.parent_part ?? "",
  }
}

export const getSpeaking = (item?: Speaking) => {
  return {
    part_one: getSpeakingPart(item?.part_one),
    part_two: getSpeakingPart(item?.part_two),
    part_three: getSpeakingPart(item?.part_three),
  }
}

const getAIAnalysis = (item?: AiSpeakingAnalysis) => {
  return {
    _id: item?._id ?? "",
    ielts_speaking_submission: item?.ielts_speaking_submission ?? "",
    ai_response: item?.ai_response ?? "",
  }
}

const getUserSpeakingPart = (item?: Userinput) => {
  return {
    audio: item?.audio ?? "",
    audio_to_text: item?.audio_to_text ?? "",
    question: item?.question ?? "",
  }
}

const getSubmission = (item?: UserSpeakingSubmission) => {
  return {
    _id: item?._id ?? "",
    part_one: getSpeakingPart(item?.part_one),
    part_two: getSpeakingPart(item?.part_two),
    part_three: getSpeakingPart(item?.part_three),
    part_one_user_inputs: getUserSpeakingPart(item?.part_one_user_inputs),
    part_two_user_inputs: getUserSpeakingPart(item?.part_two_user_inputs),
    part_three_user_inputs: getUserSpeakingPart(item?.part_three_user_inputs),
    created_at: item?.created_at ?? new Date(),
  }
}

export const getUserSpeaking = (item?: GetUserSpeakingSubmission) => {
  return {
    analysis: getAIAnalysis(item?.analysis),
    submission: getSubmission(item?.submission),
  }
}

export const getUserDetailSpeaking = (
  item?: GetUserSpeakingSubmisstionDetail,
) => {
  return {
    analysis: getAIAnalysis(item?.ai_analysis),
    submission: getSubmission(item?.submission),
  }
}

export const getUserSpeakingSubmission = (
  data?: GetUserSpeakingSubmission[],
) => {
  return data?.length
    ? data.map((item) => {
        return getUserSpeaking(item)
      })
    : []
}

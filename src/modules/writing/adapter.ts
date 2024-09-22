import {
  AIAnalysis,
  Submission,
  SubmissionsActive,
  Task,
  Writing,
} from "./types"

export const getPartsTask = (item?: Task) => {
  return {
    _id: item?._id ?? "",
    task: item?.task ?? 1,
    question: item?.question ?? "",
    answer: item?.answer ?? "",
    media_url: item?.media_url ?? "",
  }
}

export const getWritingParts = (item?: Writing) => {
  return {
    task_one: getPartsTask(item?.task_one),
    task_two: getPartsTask(item?.task_two),
  }
}

export const getAIAnalysis = (item?: AIAnalysis) => {
  return {
    _id: item?._id ?? "",
    overall: item?.overall ?? 1,
    overall_task_one: item?.overall_task_one ?? 1,
    overall_task_two: item?.overall_task_two ?? 1,
    ielts_writing_submission: item?.ielts_writing_submission ?? "",
    task_one_ai_response: item?.task_one_ai_response ?? "",
    task_two_ai_response: item?.task_two_ai_response ?? "",
  }
}

const getSubmission = (item?: Submission) => {
  return {
    _id: item?._id ?? "",
    user: {
      _id: item?.user._id ?? "",
      fio: item?.user.fio ?? "",
      candidate_number: item?.user.candidate_number ?? "",
      phone: item?.user.phone ?? "",
      date_of_birth: item?.user.date_of_birth ?? undefined,
    },
    task_one: {
      _id: item?.task_one._id ?? "",
      task: item?.task_one.task ?? 1,
      title: item?.task_one.title ?? "",
      question: item?.task_one.question ?? "",
      media_url: item?.task_one.media_url ?? "",
    },
    task_two: {
      _id: item?.task_two._id ?? "",
      task: item?.task_two.task ?? 2,
      title: item?.task_two.title ?? "",
      question: item?.task_two.question ?? "",
    },
    task_one_user_input: item?.task_one_user_input ?? "",
    task_two_user_input: item?.task_two_user_input ?? "",
    is_checked: item?.is_checked ?? false,
    created_at: item?.created_at ?? new Date(),
  }
}

export const getSubmissonsActive = (item?: SubmissionsActive) => {
  return {
    ai_analysis: getAIAnalysis(item?.ai_analysis),
    submission: getSubmission(item?.submission),
  }
}

export const getSubmissonsActives = (data?: SubmissionsActive[]) => {
  return data?.length
    ? data.map((item) => {
        return getSubmissonsActive(item)
      })
    : []
}

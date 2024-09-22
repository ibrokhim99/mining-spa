import { Listening, ListeningShuffle, Results } from "./types"

export const getListeningShuffle = (item?: ListeningShuffle) => {
  return {
    _id: item?._id ?? "",
    title: item?.title ?? "",
    audio: item?.audio ?? "",
    section_one_questions: item?.section_one_questions ?? "",
    section_two_questions: item?.section_two_questions ?? "",
    section_three_questions: item?.section_three_questions ?? "",
    section_four_questions: item?.section_four_questions ?? "",
  }
}

const getResults = (item?: Results) => {
  if (!item) return {}

  return Object.keys(item).reduce(
    (resultObj, key) => {
      resultObj[key] = {
        questionId: key,
        correctAnswer: item[key].correct_answer,
        userAnswer: item[key].user_answer,
        isCorrect: item[key].is_correct,
      }
      return resultObj
    },
    {} as {
      [key: string]: {
        questionId: string
        correctAnswer: string
        userAnswer: string
        isCorrect: boolean
      }
    },
  )
}

export const getSubmission = (item?: Listening) => {
  return {
    _id: item?._id ?? "",
    title: item?.title ?? "",
    section_one_user_answers: item?.section_one_user_answers ?? { [""]: "" },
    section_two_user_answers: item?.section_two_user_answers ?? { [""]: "" },
    section_three_user_answers: item?.section_three_user_answers ?? {
      [""]: "",
    },
    section_four_user_answers: item?.section_four_user_answers ?? { [""]: "" },
    section_one_user_results: getResults(item?.section_one_user_results),
    section_two_user_results: getResults(item?.section_two_user_results),
    section_three_user_results: getResults(item?.section_three_user_results),
    section_four_user_results: getResults(item?.section_four_user_results),
    overall_score: item?.overall_score ?? 0,
    created_at: item?.created_at ?? new Date(),
  }
}

export const getListeningSubmissons = (data?: Listening[]) => {
  return data?.length
    ? data.map((item) => {
        return getSubmission(item)
      })
    : []
}

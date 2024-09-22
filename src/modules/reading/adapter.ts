import {
  Reading,
  ReadingSection,
  ReadingShuffle,
  Results,
  Section,
} from "./types"

export const getShuffleSection = (item?: Section) => {
  return {
    _id: item?._id ?? "",
    section: item?.section ?? 1,
    passage: item?.passage ?? "",
    questions: item?.questions ?? "",
  }
}

export const getReadingShuffle = (item?: ReadingShuffle) => {
  return {
    section_one: getShuffleSection(item?.section_one),
    section_two: getShuffleSection(item?.section_two),
    section_three: getShuffleSection(item?.section_three),
  }
}

const getSection = (item?: ReadingSection) => {
  return {
    _id: item?._id ?? "",
    section: item?.section ?? 1,
    title: item?.title ?? "",
    questions: item?.questions ?? "",
    passage: item?.passage ?? "",
    answers: item?.answers ?? { [""]: "" },
  }
}

const getResults = (item?: Results) => {
  if (!item) return {}

  return Object.keys(item).map((key) => ({
    questionId: key,
    correctAnswer: item[key].correct_answer,
    userAnswer: item[key].user_answer,
    isCorrect: item[key].is_correct,
  }))
}

const getDetailResult = (item?: Results) => {
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

const getSubmission = (item?: Reading) => {
  return {
    _id: item?._id ?? "",
    section_one: getSection(item?.section_one),
    section_two: getSection(item?.section_two),
    section_three: getSection(item?.section_three),
    section_one_user_answers: item?.section_one_user_answers ?? { [""]: "" },
    section_two_user_answers: item?.section_two_user_answers ?? { [""]: "" },
    section_three_user_answers: item?.section_three_user_answers ?? {
      [""]: "",
    },
    section_one_user_results: getResults(item?.section_one_user_results),
    section_two_user_results: getResults(item?.section_two_user_results),
    section_three_user_results: getResults(item?.section_three_user_results),
    overall_score: item?.overall_score ?? 0,
    created_at: item?.created_at ?? new Date(),
  }
}
export const getDetailSubmission = (item?: Reading) => {
  return {
    section_one: getSection(item?.section_one),
    section_two: getSection(item?.section_two),
    section_three: getSection(item?.section_three),
    section_one_user_answers: item?.section_one_user_answers ?? { [""]: "" },
    section_two_user_answers: item?.section_two_user_answers ?? { [""]: "" },
    section_three_user_answers: item?.section_three_user_answers ?? {
      [""]: "",
    },
    section_one_user_results: getDetailResult(item?.section_one_user_results),
    section_two_user_results: getDetailResult(item?.section_two_user_results),
    section_three_user_results: getDetailResult(
      item?.section_three_user_results,
    ),
    overall_score: item?.overall_score ?? 0,
    created_at: item?.created_at ?? new Date(),
  }
}

export const getReadingSubmissons = (data?: Reading[]) => {
  return data?.length
    ? data.map((item) => {
        return getSubmission(item)
      })
    : []
}

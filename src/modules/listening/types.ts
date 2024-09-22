type Answers = Record<string, string | string[] | undefined>
export type Results = Record<
  string,
  {
    correct_answer: string
    user_answer: string
    is_correct: boolean
  }
>

export interface Listening {
  _id: string
  title: string
  section_one_user_answers: Answers
  section_two_user_answers: Answers
  section_three_user_answers: Answers
  section_four_user_answers: Answers
  section_one_user_results: Results
  section_two_user_results: Results
  section_three_user_results: Results
  section_four_user_results: Results
  overall_score: number
  created_at: Date
}

export interface ListeningInput {
  listening_id: string
  section_one_user_answers: Answers
  section_two_user_answers: Answers
  section_three_user_answers: Answers
  section_four_user_answers: Answers
}

export interface ListeningShuffle {
  _id: string
  title: string
  audio: string
  section_one_questions: string
  section_two_questions: string
  section_three_questions: string
  section_four_questions: string
}

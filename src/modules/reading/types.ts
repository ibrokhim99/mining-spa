type Answers = Record<string, string | string[] | undefined>
export type Results = Record<
  string,
  {
    correct_answer: string
    user_answer: string
    is_correct: boolean
  }
>

export interface ReadingSection {
  _id: string
  section: 1 | 2 | 3
  title?: string
  passage: string
  questions: string
  answers: Answers
}

export interface Reading {
  _id: string
  section_one: ReadingSection
  section_two: ReadingSection
  section_three: ReadingSection
  section_one_user_answers: Answers
  section_two_user_answers: Answers
  section_three_user_answers: Answers
  section_one_user_results: Results
  section_two_user_results: Results
  section_three_user_results: Results
  overall_score: number
  created_at: Date
}

export interface ReadingInput {
  section_one: string
  section_two: string
  section_three: string
  section_one_user_answers: Answers
  section_two_user_answers: Answers
  section_three_user_answers: Answers
}

export type Section = Omit<ReadingSection, "answers">

export interface ReadingShuffle {
  section_one: Section
  section_two: Section
  section_three: Section
}

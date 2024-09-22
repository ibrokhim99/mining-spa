export interface Task {
  _id: string
  task: number
  question: string
  answer: string
  media_url: string
}

export interface Writing {
  task_one: Task
  task_two: Task
}

export interface WritingPartsInput {
  task_one: string
  task_two: string
  task_one_user_input: string
  task_two_user_input: string
}

export interface User {
  _id: string
  fio: string
  candidate_number: string
  phone: string
  date_of_birth?: Date
}

export interface AIAnalysis {
  _id: string
  overall: number
  overall_task_one: number
  overall_task_two: number
  ielts_writing_submission: string
  task_one_ai_response: string
  task_two_ai_response: string
}

export interface TaskOne {
  _id: string
  task: number
  title: string
  question: string
  media_url: string
}
export type TaskTwo = Omit<TaskOne, "media_url">

export interface Submission {
  _id: string
  user: User
  task_one: TaskOne
  task_two: TaskTwo
  task_one_user_input: string
  task_two_user_input: string
  is_checked: boolean
  created_at: Date
}

export interface SubmissionsActive {
  ai_analysis: AIAnalysis
  submission: Submission
}

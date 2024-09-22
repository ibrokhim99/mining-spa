import { ListeningShuffle } from "../listening/types"
import { Section } from "../reading/types"
import { Speaking, SpeakingParts } from "../speaking/types"
import { Task, Writing } from "../writing/types"

export interface FullExamListening {
  listening: ListeningShuffle
  status?: string
}

export interface FullExamReading {
  section_one: Section
  section_two: Section
  section_three: Section
  status?: string
}

export interface FullExamWriting {
  task_one: Task
  task_two: Task
  status?: string
}

export interface FullExamSpeaking {
  part_one: SpeakingParts
  part_two: SpeakingParts
  part_three: SpeakingParts
  status?: string
}

export interface FullExam {
  _id: string
  user: string
  type: string
  listening: FullExamListening
  reading: FullExamReading
  writing: FullExamWriting
  speaking: FullExamSpeaking
  is_finished: string
}

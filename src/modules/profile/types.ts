import { EstimatedExamDate, Role, TargetSourceTypes } from "../auth/types"

export interface IProfile {
  _id: string
  fio: string
  phone: string
  date_of_birth?: Date
  candidate_number: number
  role: Role
  estimated_exam_date?: EstimatedExamDate | any
  target_source?: TargetSourceTypes | any
  coupon?: string | any
}

export interface IProfileDetail {
  fio: string
  phone: string
  date_of_birth?: Date
  estimated_exam_date: EstimatedExamDate
  target_source: TargetSourceTypes
  coupon?: string
}
export interface IProfileBalance {
  user: string
  full_exam_count: number
  listening_count: number
  reading_count: number
  writing_count: number
  speaking_count: number
}

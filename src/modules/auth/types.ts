export type Role = "student"

export enum EstimatedExamDate {
  ONE_WEEK = "~In 1 Week",
  TWO_WEEKS = "~In 2 Weeks",
  ONE_MONTH = "~In 1 Month",
  THREE_MONTHS = "~In 3 Months",
  SIX_MONTHS = "~In 6 Months",
  ONE_YEAR = "~ In 1 Year",
  UNKNOWN = "Unknown",
}

export enum TargetSourceTypes {
  TELEGRAM = "Telegram",
  BMWM24 = "Bekzod Mirakhmedov's channel",
  EMAIL = "Email",
  SMS = "SMS",
  IELTS_WEBSITE = "IELTS Website",
  IELTS_APP = "IELTS App",
  FACEBOOK_GROUP = "Facebook Group",
  YOUTUBE_CHANNEL = "YouTube Channel",
  INSTAGRAM_PAGE = "Instagram Page",
  LINKEDIN_GROUP = "LinkedIn Group",
  FORUM = "Forum",
  BLOG = "Blog",
  ONLINE_COURSE_PLATFORM = "Online Course Platform",
  OTHER = "Other",
}

export interface ISignIn {
  phone: string
  password: string
}

export interface ISignUp {
  role: Role
  code: number
  code_hash: string
  phone: string
  password: string
}

export interface IForgotPassword {
  phone: string
}

export interface IOtpPhone {
  phone: string
  password: string
  role: Role
}

export interface IResetPassword {
  phone: string
  code: number
  code_hash: string
  new_password: string
}

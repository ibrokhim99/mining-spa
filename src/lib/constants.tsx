import { EstimatedExamDate, TargetSourceTypes } from "@/modules/auth/types"

const createOptions = <T extends string>(options: T[]) =>
  options.map((option) => ({ name: option, type: option }))

export const targetSources = createOptions([
  TargetSourceTypes.BMWM24,
  TargetSourceTypes.TELEGRAM,
  TargetSourceTypes.INSTAGRAM_PAGE,
  TargetSourceTypes.YOUTUBE_CHANNEL,
  TargetSourceTypes.LINKEDIN_GROUP,
  TargetSourceTypes.FACEBOOK_GROUP,
  TargetSourceTypes.IELTS_APP,
  TargetSourceTypes.IELTS_WEBSITE,
  TargetSourceTypes.ONLINE_COURSE_PLATFORM,
  TargetSourceTypes.EMAIL,
  TargetSourceTypes.SMS,
  TargetSourceTypes.BLOG,
  TargetSourceTypes.FORUM,
  TargetSourceTypes.OTHER,
])

export const estimatedExamDates = createOptions([
  EstimatedExamDate.ONE_WEEK,
  EstimatedExamDate.TWO_WEEKS,
  EstimatedExamDate.ONE_MONTH,
  EstimatedExamDate.THREE_MONTHS,
  EstimatedExamDate.SIX_MONTHS,
  EstimatedExamDate.ONE_YEAR,
  EstimatedExamDate.UNKNOWN,
])

export const listeningInstruction = {
  sectionTitle: "IELTS Listening",
  sectionTime: "Approximately 30 minutes",
  instructions: [
    <>
      Answer <b>all</b> the questions.
    </>,
    "You can change your answers at any time during the test.",
  ],
  informations: [
    "There are 40 questions in this test.",
    "Each question carries one mark.",
    "There are four parts to the test.",
    "You will hear each part once.",
    "For each part of the test there will be time for you to look through the questions and time for you to check your answers.",
  ],
}

export const readingInstruction = {
  sectionTitle: "IELTS Academic Reading",
  sectionTime: "1 hour",
  instructions: [
    <>
      Answer <b>all</b> the questions.
    </>,
    "You can change your answers at any time during the test.",
  ],
  informations: [
    "There are 40 questions in this test.",
    "Each question carries one mark.",
    "The test clock will show you when there are 10 minutes and 5 minutes remaining.",
  ],
}

export const writingInstruction = {
  sectionTitle: "IELTS Academic Writing",
  sectionTime: "1 hour",
  instructions: [
    <>
      Answer <b>both</b> parts.
    </>,
    "You can change your answers at any time during the test.",
  ],
  informations: [
    "There are two parts in this test.",
    "Part 2 contributes twice as much as Part 1 to the writing score.",
    "The test clock will show you when there are 10 minutes and 5 minutes remaining.",
  ],
}

export const fullInstruction = {
  sectionTitle: "Mock IELTS exam",
  sectionTime: "3 hour",
  instructions: [
    <>
      Answer <b>both</b> parts.
    </>,
    "You can change your answers at any time during the test.",
  ],
  informations: [
    "In listening test  there are 40 questions in this test.",
    "Each question carries one mark.",
    "The test clock will show you when there are 10 minutes and 5 minutes remaining.",
    "In reading test there are 40 questions in this test.",
    "Each question carries one mark.",
    "The test clock will show you when there are 10 minutes and 5 minutes remaining.",
    "In writing test there are two parts in this test.",
    "Part 2 contributes twice as much as Part 1 to the writing score.",
    "The test clock will show you when there are 10 minutes and 5 minutes remaining.",
    "The Speaking test consists of three parts.",
    "Part 1 involves general questions about yourself and familiar topics.",
    "Part 2 is a long turn; you will talk about a given topic based on a prompt.",
    "Part 3 involves a discussion with the examiner on more abstract ideas related to the topic from Part 2.",
    "The Speaking test is recorded and evaluated based on fluency, pronunciation, grammar, and vocabulary.",
  ],
}

export const speakingInstruction = {
  sectionTitle: "IELTS Speaking",
  sectionTime: "11-14 minutes",
  instructions: [
    <>
      Answer <b>all</b> the questions clearly and confidently.
    </>,
    "Speak naturally and fluently without pausing too much.",
    "Express your ideas and opinions on the topics asked.",
    "You can ask the examiner to repeat or clarify a question if needed.",
  ],
  informations: [
    "The Speaking test consists of three parts.",
    "Part 1 involves general questions about yourself and familiar topics.",
    "Part 2 is a long turn; you will talk about a given topic based on a prompt.",
    "Part 3 involves a discussion with the examiner on more abstract ideas related to the topic from Part 2.",
    "The Speaking test is recorded and evaluated based on fluency, pronunciation, grammar, and vocabulary.",
  ],
}

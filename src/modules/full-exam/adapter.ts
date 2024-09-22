import { getListeningShuffle } from "../listening/adapter"
import { getShuffleSection } from "../reading/adapter"
import { getSpeaking, getSpeakingPart } from "../speaking/adapter"
import { getPartsTask, getWritingParts } from "../writing/adapter"

import {
  FullExam,
  FullExamListening,
  FullExamReading,
  FullExamSpeaking,
  FullExamWriting,
} from "./type"

const getFullExamListeing = (item?: FullExamListening) => {
  return {
    listening: getListeningShuffle(item?.listening),
    status: item?.status ?? "",
  }
}

const getFullExamReading = (item?: FullExamReading) => {
  return {
    section_one: getShuffleSection(item?.section_one),
    section_two: getShuffleSection(item?.section_two),
    section_three: getShuffleSection(item?.section_three),
    status: item?.status ?? "",
  }
}

const getFullExamWriting = (item?: FullExamWriting) => {
  return {
    task_one: getPartsTask(item?.task_one),
    task_two: getPartsTask(item?.task_two),
    status: item?.status ?? "",
  }
}

const getFullExamSpeaking = (item?: FullExamSpeaking) => {
  return {
    part_one: getSpeakingPart(item?.part_one),
    part_two: getSpeakingPart(item?.part_two),
    part_three: getSpeakingPart(item?.part_three),
    status: item?.status ?? "",
  }
}

export const getFullExam = (item?: FullExam) => {
  return {
    user: item?.user ?? "",
    _id: item?._id ?? "",
    is_finished: item?.is_finished ?? "",
    listening: getFullExamListeing(item?.listening),
    reading: getFullExamReading(item?.reading),
    writing: getFullExamWriting(item?.writing),
    speaking: getFullExamSpeaking(item?.speaking),
  }
}

import { FaqContent, FaqSection, InfoContent, InfoSection } from "./type"

const getInfoContent = (item?: InfoContent) => {
  return {
    title: item?.title ?? "",
    icon: item?.icon ?? "",
    description: item?.description ?? "",
    image: item?.image?.data?.attributes ?? "",
  }
}

export const getInfoSection = (item?: InfoSection) => {
  return {
    title: item?.title ?? "",
    content: item?.contents.map((item) => getInfoContent(item)) ?? [],
  }
}

const getFaqContent = (item?: FaqContent) => {
  return {
    title: item?.title ?? "",
    desciption: item?.description ?? "",
  }
}

export const getFaqSection = (item?: FaqSection) => {
  return {
    title: item?.title,
    contents: item?.contents.map((item) => getFaqContent(item)),
  }
}

import { FaqSection, InfoSection } from "./type"
import { str_api } from "@/services/api"

export const GetInfoSection = async () => {
  return await str_api.get<InfoSection>("info-section?populate=deep")
}

export const GetFaqSection = async () => {
  return await str_api.get<FaqSection>("faq-section?populate=deep")
}

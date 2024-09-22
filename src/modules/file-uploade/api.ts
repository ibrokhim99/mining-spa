import http from "@/services/api"

export const FileUpload = async (file: FormData, folder = "audios") => {
  return await http.post(`/upload?folder=${folder}`, file)
}

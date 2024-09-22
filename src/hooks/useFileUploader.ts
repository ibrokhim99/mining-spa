import { useFileUpload } from "@/modules/file-uploade/hooks/useFileUpload"

type Folder = "images" | "audios" | "documents" | "files" | "videos"

export default function useFileUploader(
  folder?: Folder | (string & NonNullable<unknown>),
) {
  const { triggerFileUpload, isPending } = useFileUpload(folder)

  async function uploadFile<TData>(
    file: File,
    key: keyof TData & string,
    values: Record<string, unknown>,
  ): Promise<TData> {
    const formData = new FormData()
    formData.append("file", file)

    if (file instanceof File) {
      const { data } = await triggerFileUpload(formData)
      return { ...values, [key]: data.data.url } as TData
    }

    return values as TData
  }

  return { uploadFile, isPending }
}

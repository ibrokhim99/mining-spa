import { useMutation } from "@tanstack/react-query"

import { toast } from "@/components/ui/use-toast"

import { FileUpload } from "../api"

export const useFileUpload = (folder?: string) => {
  const { mutateAsync, isSuccess, isError, isPending } = useMutation({
    mutationFn: (file: FormData) => FileUpload(file, folder),
    onError: (error: Error) =>
      toast({
        variant: "destructive",
        title: "Error in uploade file",
        description: `error occure when uploading files Error:${error.message}`,
      }),
  })

  return { triggerFileUpload: mutateAsync, isSuccess, isError, isPending }
}

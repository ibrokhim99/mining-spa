import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { FullExamReadingSubmission } from "../api"

import { ReadingInput } from "@/modules/reading/types"

export const useFullExamReadingSubmission = () => {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: ReadingInput) => FullExamReadingSubmission(values),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Successfully submitted",
        description: "You can view the result in your profile.",
      })
    },
  })

  return {
    fullExamReadingSubmission: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

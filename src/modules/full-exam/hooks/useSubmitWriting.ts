import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { FullExamWritingSubmission } from "../api"

import { WritingPartsInput } from "@/modules/writing/types"

export const useFullExamWritingSubmit = () => {
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: WritingPartsInput) =>
      FullExamWritingSubmission(values),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Successfully submitted",
        description: "You can view the result in your profile.",
      })
    },
  })

  return {
    triggerFullExamWritingSubmit: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

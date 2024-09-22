import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { FullExamSpeakingSubmission } from "../api"

import { SpeakingSubmission } from "@/modules/speaking/types"

export const useFullExamSpeakingSubmission = () => {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: SpeakingSubmission) =>
      FullExamSpeakingSubmission(values),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Successfully submitted",
        description: "You can view the result in your profile.",
      })
      router.push("/")
    },
  })

  return {
    triggerSubmissionFullExamSpeaking: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

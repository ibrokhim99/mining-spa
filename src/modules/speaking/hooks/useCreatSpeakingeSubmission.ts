import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { CreateSpeakingSubmission } from "../api"
import { SpeakingSubmission } from "../types"

export const useCreateSpeakingSubmission = () => {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: SpeakingSubmission) =>
      CreateSpeakingSubmission(values),
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
    triggerSubmissionSpeakingCreate: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

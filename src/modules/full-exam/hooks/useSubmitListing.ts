import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { FullExamListening } from "../api"

import { ListeningInput } from "@/modules/listening/types"

export const useFullExamSubmissionListening = () => {
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: ListeningInput) => FullExamListening(values),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Successfully submitted",
        description: "You can view the result in your profile.",
      })
    },
  })

  return {
    fullExamListeningSubmission: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

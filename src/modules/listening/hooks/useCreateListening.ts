import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { CreateSubmission } from "../api"
import { ListeningInput } from "../types"

export const useCreateListening = () => {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: ListeningInput) => CreateSubmission(values),
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
    createSubmission: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

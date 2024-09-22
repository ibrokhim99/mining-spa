import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { CreateParts } from "../api"
import { WritingPartsInput } from "../types"

export const useCreateParts = () => {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: WritingPartsInput) => CreateParts(values),
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
    triggerPartsCreate: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { SignUp } from "../api"
import { ISignUp } from "../types"

import { setAccessToken } from "@/lib/setAccessToken"
import { showErrorToast } from "@/lib/showErrorToast"

export const useSignUp = () => {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: ISignUp) => SignUp(values),
    onSuccess: async ({ data }) => {
      toast({
        variant: "success",
        title: "Welcome!",
        description: "Successfully sign up",
      })
      await setAccessToken(data.data.access_token)
      router.push("/auth/profile-detail")
    },
    onError: (error: any) => showErrorToast(error),
  })

  return {
    triggerSignUp: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

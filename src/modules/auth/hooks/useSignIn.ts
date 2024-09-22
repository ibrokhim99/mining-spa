"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { SignIn } from "../api"
import { ISignIn } from "../types"

import { setAccessToken } from "@/lib/setAccessToken"
import { showErrorToast } from "@/lib/showErrorToast"

export const useSignIn = () => {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: ISignIn) => SignIn(values),
    onSuccess: async ({ data }) => {
      toast({
        variant: "success",
        title: "Welcome!",
        description: "Successfully sign in",
      })
      await setAccessToken(data.data.access_token)
      router.push("/")
    },
    onError: (error: any) => showErrorToast(error),
  })

  return {
    triggerSignIn: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

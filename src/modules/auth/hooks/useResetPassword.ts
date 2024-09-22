"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { ResetPassword } from "../api"
import { IResetPassword } from "../types"

import { showErrorToast } from "@/lib/showErrorToast"

export const useResetPassword = () => {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: IResetPassword) => ResetPassword(values),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Success!",
        description: "Successfully created",
      })
      router.push("/auth/sign-in")
    },
    onError: (error: any) => showErrorToast(error),
  })

  return {
    triggerResetPassword: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

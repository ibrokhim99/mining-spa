"use client"

import { useMutation } from "@tanstack/react-query"

import { useToast } from "@/components/ui/use-toast"

import { ForgotPassword } from "../api"
import { IForgotPassword } from "../types"

import { showErrorToast } from "@/lib/showErrorToast"

export const useForgotPassword = () => {
  const { toast } = useToast()

  const { mutateAsync, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: IForgotPassword) => ForgotPassword(values),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Success!",
        description: "Successfully send",
      })
    },
    onError: (error: any) => showErrorToast(error),
  })

  return {
    triggerForgotPassword: mutateAsync,
    isPending,
    isSuccess,
    isError,
  }
}

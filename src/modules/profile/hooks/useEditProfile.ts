"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { useToast } from "@/components/ui/use-toast"

import { EditProfileDetail } from "../api"
import { IProfileDetail } from "../types"

import { showErrorToast } from "@/lib/showErrorToast"

export const useEditProfile = () => {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: IProfileDetail) => EditProfileDetail(values),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Welcome!",
        description: "Successfully created profile",
      })
      router.push("/")
    },
    onError: (error: any) => showErrorToast(error),
  })

  return {
    triggerEditProfile: mutate,
    isPending,
    isSuccess,
    isError,
  }
}

"use client"

import { useMutation } from "@tanstack/react-query"

import { SendOtp } from "../api"
import { IOtpPhone } from "../types"

import { showErrorToast } from "@/lib/showErrorToast"

export const useSendOtp = () => {
  const { mutateAsync, isPending, isSuccess, isError } = useMutation({
    mutationFn: (values: IOtpPhone) => SendOtp(values),
    onError: (error: any) => showErrorToast(error),
  })

  return {
    triggerSendOtp: mutateAsync,
    isPending,
    isSuccess,
    isError,
  }
}

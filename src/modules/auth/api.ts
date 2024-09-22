import {
  IForgotPassword,
  IOtpPhone,
  IResetPassword,
  ISignIn,
  ISignUp,
} from "./types"
import http from "@/services/api"

export const SignIn = async (values: ISignIn) => {
  return await http.post(`/auth/signin`, values)
}

export const SignUp = async (values: ISignUp) => {
  return await http.post(`/auth/signup`, values)
}

export const SendOtp = async (values: IOtpPhone) => {
  return await http.post(`/auth/otp/phone`, values)
}

export const ForgotPassword = async (values: IForgotPassword) => {
  return await http.post(`/auth/forgot-password/`, values)
}

export const ResetPassword = async (values: IResetPassword) => {
  return await http.post(`/auth/reset-password/`, values)
}

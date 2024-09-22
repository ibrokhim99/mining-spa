import { ReactNode } from "react"

import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp"

interface IProps {
  name: string
  label?: string
  extraLabel?: ReactNode
  required?: boolean
}
const InputOtpField = ({ required, name, label, extraLabel }: IProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel extraLabel={extraLabel}>
              {`${label} `}
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot index={1} />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot index={2} />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot index={3} />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot index={4} />
              </InputOTPGroup>

              <InputOTPGroup>
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputOtpField

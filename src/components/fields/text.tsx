import { ReactNode } from "react"

import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input, InputProps } from "@/components/ui/input"

import { cn } from "@/lib/utils"

interface IProps extends InputProps {
  name: string
  label?: string
  extraLabel?: ReactNode
  required?: boolean
}
const TextField = ({ required, name, label, extraLabel, ...props }: IProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel extraLabel={extraLabel}>
              {`${label} `}
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input {...props} {...field} onChange={(e) => field.onChange(e)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default TextField

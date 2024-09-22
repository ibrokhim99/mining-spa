import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { PhoneInput } from "../ui/phone-input"

interface IProps {
  name: string
  label?: string
  required?: boolean
}

export default function PhoneField({ required, name, label }: IProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {`${label} `}
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <PhoneInput
              {...field}
              onChange={(e) => field.onChange(e)}
              international
              defaultCountry="UZ"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

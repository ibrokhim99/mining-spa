import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

interface IProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
}

export default function TextAreaField({
  placeholder,
  required,
  name,
  label,
}: IProps) {
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
            <Textarea
              {...field}
              placeholder={placeholder}
              className="max-h-full h-[600px]"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface IProps {
  name: string
  placeholder?: string
  data: { name: string; type: string; disabled?: boolean }[]
  label?: string
  required?: boolean
  disabled?: boolean
}

export const SelectField = ({
  data,
  placeholder,
  name,
  label,
  required,
  disabled,
}: IProps) => {
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
              {required && (
                <span className="text-red-500 dark:text-red-900">*</span>
              )}
            </FormLabel>
          )}
          <FormControl>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {data.map((item) => (
                  <SelectItem
                    className="focus:text-foreground"
                    value={item.type}
                    key={item.type}
                    disabled={item.disabled}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

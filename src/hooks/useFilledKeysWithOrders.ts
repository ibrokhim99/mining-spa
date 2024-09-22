import { useCallback, useContext, useEffect, useState } from "react"

import { TestContext } from "@/providers/test-context"

type AnswerValues = Record<
  string,
  Record<string, string | string[] | undefined>
>

export const useFilledKeysWithOrders = () => {
  const [keysWithValues, setKeysWithValues] = useState<
    Record<string, string[]>
  >({})
  const [namesWithValues, setNamesWithValues] = useState<
    Record<string, string[]>
  >({})

  const { setFilledQuestions } = useContext(TestContext)

  const getFilledKeys = useCallback((values: AnswerValues) => {
    setKeysWithValues((prevKeysWithValues) => {
      const newKeysWithValues = { ...prevKeysWithValues }

      Object.entries(values).forEach(([sectionKey, answers]) => {
        const filledKeys = Object.entries(answers)
          .filter(
            ([_, value]) =>
              value !== undefined &&
              (typeof value === "string"
                ? value.trim() !== ""
                : Array.isArray(value) && value.length > 0),
          )
          .map(([key, value]) =>
            Array.isArray(value) ? `${key}__${value.length}` : key,
          )

        if (filledKeys.length > 0) {
          newKeysWithValues[sectionKey] = filledKeys
        } else {
          delete newKeysWithValues[sectionKey]
        }
      })

      return newKeysWithValues
    })
  }, [])

  useEffect(() => {
    setNamesWithValues((prevNamesWithValues) => {
      const updatedNamesWithValues: Record<string, string[]> = {
        ...prevNamesWithValues,
      }

      Object.entries(keysWithValues).forEach(([sectionKey, ids]) => {
        const names = ids
          .flatMap((id) => {
            const [extractedId, numbersPart] = id.split("__")
            const element = document.querySelector(
              `[id="${extractedId}"], [id^="${extractedId}__"]`,
            )
            const nameAttribute =
              element?.getAttribute("name") ||
              element?.getAttribute("data-name") ||
              ""

            const nameNumbers = nameAttribute.split("_")

            if (numbersPart && /^\d+$/.test(numbersPart)) {
              const number = parseInt(numbersPart, 10)
              return nameNumbers.slice(0, number)
            }

            return [nameAttribute]
          })
          .filter(Boolean)

        if (names.length > 0) {
          updatedNamesWithValues[sectionKey] = names
        }
      })

      Object.keys(prevNamesWithValues).forEach((sectionKey) => {
        if (!keysWithValues[sectionKey]) {
          delete updatedNamesWithValues[sectionKey]
        }
      })

      return updatedNamesWithValues
    })
  }, [keysWithValues])

  const getFlattenedValues = useCallback(() => {
    return Object.values(namesWithValues)
      .flat()
      .filter((value) => value.trim() !== "")
  }, [namesWithValues])

  useEffect(() => {
    setFilledQuestions(getFlattenedValues())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFlattenedValues])

  return { getFilledKeys }
}

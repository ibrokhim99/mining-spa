import { ReactNode, createContext, useCallback, useMemo, useState } from "react"

interface IQuestionContext {
  filledQuestions: string[]
  currentQuestion: number
  setFilledQuestions: (newValues: string[]) => void
  setCurrentQuestion: (question: number) => void
}

export const TestContext = createContext<IQuestionContext>({
  filledQuestions: [],
  currentQuestion: 1,
  setFilledQuestions: () => [],
  setCurrentQuestion: () => {},
})

export const TestContextProvider = ({ children }: { children: ReactNode }) => {
  const [filledQuestions, setFilledQuestions] = useState<string[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(1)

  const handleSetFilledQuestions = useCallback((newValues: string[]) => {
    setFilledQuestions(newValues)
  }, [])

  const handleSetCurrentQuestion = useCallback(
    (question: number) => setCurrentQuestion(question),
    [],
  )

  const contextValue = useMemo(
    () => ({
      filledQuestions,
      currentQuestion,
      setFilledQuestions: handleSetFilledQuestions,
      setCurrentQuestion: handleSetCurrentQuestion,
    }),
    [
      filledQuestions,
      currentQuestion,
      handleSetFilledQuestions,
      handleSetCurrentQuestion,
    ],
  )

  return (
    <TestContext.Provider value={contextValue}>{children}</TestContext.Provider>
  )
}

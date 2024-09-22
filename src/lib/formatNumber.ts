type InputValue = string | number | null
export function fNumber(inputValue: InputValue) {
  const locale = "fr-FR"

  if (inputValue == null || Number.isNaN(inputValue)) return ""

  const number = Number(inputValue)

  const fm = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number)
  const formattedNumber = fm.replace(",", ".")

  return formattedNumber
}

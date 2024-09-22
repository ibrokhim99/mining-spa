export const onFocus = (elementName = 1) => {
  document.querySelectorAll(".active-input").forEach((el) => {
    el.classList.remove("active-input")
  })

  const inputElement = document.querySelector<HTMLInputElement>(
    `input[name="${elementName}"]`,
  )
  const divElement = document.querySelector<HTMLDivElement>(
    `div[data-name="${elementName}"]`,
  )
  const buttonElement = document.querySelector<HTMLButtonElement>(
    `button[name="${elementName}"], [name^="${elementName}_"]`,
  )
  const buttonWithDataName = document.querySelector<HTMLButtonElement>(
    `button[data-name*="${elementName}"]`,
  )

  if (inputElement) {
    inputElement.classList.add("active-input")
    inputElement.scrollIntoView({ behavior: "smooth", block: "center" })
    inputElement.focus()
  } else if (divElement) {
    divElement.scrollIntoView({ behavior: "smooth", block: "center" })
    divElement.focus()
  } else if (buttonElement) {
    buttonElement.classList.add("active-input")
    buttonElement.scrollIntoView({ behavior: "smooth", block: "center" })
    buttonElement.focus()
  } else if (buttonWithDataName) {
    buttonWithDataName.scrollIntoView({ behavior: "smooth", block: "center" })
    buttonWithDataName.focus()
  }
}

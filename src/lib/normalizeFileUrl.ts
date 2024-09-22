export const normalizeFileUrl = (file: string) => {
  return file.includes("https://")
    ? file
    : `${process.env.NEXT_PUBLIC_FILE_URL}${file}`
}

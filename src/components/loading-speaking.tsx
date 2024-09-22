export const LoaderSpeaking = () => {
  return (
    <div className="fixed inset-0 bg-white ml-20 bg-opacity-70 flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center border border-blue-200 p-10 rounded-lg shadow-lg bg-white">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-xl font-semibold">Please wait</p>
        <p className="mt-2 text-gray-500">
          We are uploading your test to server...
        </p>
      </div>
    </div>
  )
}

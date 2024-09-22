import { Card } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export const TestCardSekeleton = () => {
  return (
    <Card className="w-full h-[144px] xl:w-[240px] xl:h-[208px] flex flex-col  p-5 gap-y-4 sm:gap-y-5  border-none bg-[#F2F6FD]">
      <div className="flex flex-row items-start justify-start   sm:items-center sm:justify-around gap-4 sm:flex-col">
        <Skeleton className="h-[60px] w-[60px] bg-[#E3ECFC] rounded-xl flex justify-center flex-col items-center" />
        <div className="text-left sm:text-center ">
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-4 w-14 mt-2" />
        </div>
      </div>
      <Skeleton className="h-10  w-full sm:w-auto" />
    </Card>
  )
}

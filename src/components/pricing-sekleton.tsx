import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

import { cn } from "@/lib/utils"

interface Iprops {
  isPackege?: boolean
}

export const PricingSekleton = ({ isPackege }: Iprops) => {
  return (
    <Card className="w-full  lg:w-[264px] rounded-xl relative  flex-shrink">
      <div className="flex justify-center">
        <Skeleton className="  my-[9px] w-36 h-8" />
      </div>
      <Separator />
      <CardContent className="flex flex-col  justify-center p-[14px]">
        <div className="flex justify-center">
          <Skeleton className="h-5 w-36 mb-[20px]" />
        </div>
        <div
          className={cn("flex flex-col justify-center gap-[19.5px] mb-[2px]", {
            "gap-[21px]": isPackege,
          })}>
          <div className="flex flex-row gap-x-2 items-center">
            <Skeleton className="h-5 w-5 rounded-full" />

            <Skeleton className="h-5 w-36" />
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <Skeleton className="h-5 w-5 rounded-full" />

            <Skeleton className="h-5 w-36" />
          </div>
          <div className="flex flex-row gap-x-2 items-center ">
            <Skeleton className="h-5 w-5 rounded-full" />

            <Skeleton className="h-5 w-36" />
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <Skeleton className="h-5 w-5 rounded-full" />

            <Skeleton className="h-5 w-36" />
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <Skeleton className="h-5 w-5 rounded-full" />

            <Skeleton className="h-5 w-36" />
          </div>
        </div>
        <Skeleton className="mt-[22px] h-[40px]  " />
      </CardContent>
    </Card>
  )
}

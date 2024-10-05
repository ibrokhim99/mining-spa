import { Badge } from "@/components/ui/badge"

import { ReviewsCard } from "./reviews-card"

export const ReviewsSection = () => {
  return (
    <section className="bg-[#F5F9FC] py-[60px] mb-10 mt-8">
      <div className="container flex flex-col md:flex-row mx-auto px-[18px] items-center  lg:px-20">
        <div className="text-center md:text-left mb-[50px] max-w-[500px]">
          <Badge variant="secondary" className="mb-3">
            AI Apps for Language Skills
          </Badge>
          <h2 className="text-3xl sm:text-5xl">
            720K Users Prove : Achieve Target Score in 2 Months
          </h2>
        </div>
        <ReviewsCard />
      </div>
    </section>
  )
}

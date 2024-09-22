import { ArrowRight2 } from "iconsax-react"
import Image from "next/image"

import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"

const reviewInfoCard = [
  {
    id: 1,
    score_befor: "5.0",
    score_after: "7.5",
    comment: `The AI integration in IELTS is incredibly impressive. Not only does it provide instant feedback, but it's also surprisingly on-point. Practicing with this app has genuinely felt like having a personal IELTS coach by my side. I'm super excited for my upcoming test.`,
    full_name: "Jamolbek Kamolov",
    review: 5,
    profile_img: "/avatar.png",
  },
  {
    id: 2,
    score_befor: "5.0",
    score_after: "7.5",
    comment: `The AI integration in IELTS is incredibly impressive. Not only does it provide instant feedback, but it's also surprisingly on-point. Practicing with this app has genuinely felt like having a personal IELTS coach by my side. I'm super excited for my upcoming test.`,
    full_name: "Jamolbek Kamolov",
    review: 5,
    profile_img: "/avatar.png",
  },
]

export const ReviewsCard = () => {
  return (
    <div className="flex flex-row gap-x-5 justify-start max-w-full overflow-x-auto pt-10">
      {reviewInfoCard.map((info) => (
        <Card
          key={info.id}
          className="w-[314px] md:w-[440px]  rounded-3xl p-8 flex-shrink-0 shadow-none  bg-white ">
          <div>
            <div className="flex flex-row max-w-[220px] items-center justify-between mb-6">
              <div className="bg-[#EEF3FF] w-[68px] h-[60px] rounded-[10px] flex items-center justify-center flex-col">
                <div className="text-lg font-semibold text-[#3B3C3D]">
                  {info.score_befor}
                </div>
                <p className="text-sm text-muted-foreground">Before</p>
              </div>
              <ArrowRight2 color="#959698" />
              <div className="bg-[#EEF3FF] w-[68px] h-[60px] rounded-[10px] flex items-center justify-center flex-col">
                <div className="text-lg font-semibold text-[#3B3C3D]">
                  {info.score_after}
                </div>
                <p className="text-sm text-muted-foreground">After</p>
              </div>
            </div>
            <CardDescription className="text-[#3B3C3D] text-lg leading-7">
              {info.comment}
            </CardDescription>
          </div>
          <CardFooter className="flex items-center mt-4">
            <div className="flex items-center">
              <Image
                src={info.profile_img}
                alt={`${info.full_name} profile picture`}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <p className="text-[#3B3C3D] font-semibold">{info.full_name}</p>
                <div className="flex">
                  {[...Array(info.review)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFC107"
                      viewBox="0 0 24 24"
                      stroke="none"
                      className="w-4 h-4">
                      <path d="M12 .587l3.668 7.431L24 9.187l-6 5.832 1.417 8.258L12 18.564l-7.417 4.713L6 15.019 0 9.187l8.332-1.169z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

import { IProfile } from "@/modules/profile/types"

interface IProps {
  onNavigate: () => void
  userInfo: IProfile
  isActive?: boolean
}

export const ConfirmDetails = ({ onNavigate, userInfo, isActive }: IProps) => {
  const { fio, date_of_birth, candidate_number } = userInfo

  return (
    <div className="flex justify-center p-6 pt-52">
      <Card className="max-w-3xl w-full bg-tertiary border-white relative rounded-t-none">
        <CardHeader className="absolute -top-14 flex flex-row items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <Image
              src="https://s3-eu-west-1.amazonaws.com/oep2stt/sample-listening-plan-map-diagram-labelling/images/main/userCheck.png"
              alt="user-check"
              width={48}
              height={48}
            />
          </div>
          <h2 className="text-base font-bold text-white [text-shadow:0px_1px_2px_rgb(0_0_0_/_75%)]">
            Confirm your details
          </h2>
        </CardHeader>
        <CardContent className="text-gray-600 space-y-4 p-3 mb-4">
          <div>
            <div>Name: {fio}</div>
            <div>
              Date of birth:{" "}
              {date_of_birth && format(date_of_birth, "dd/MM/yyyy")}
            </div>
            <div>Candidate number: {candidate_number}</div>
          </div>
          <p className="bg-no-repeat pl-6 bg-[left_4px] text-foreground bg-[url('https://s3-eu-west-1.amazonaws.com/oep2stt/sample-listening-plan-map-diagram-labelling/images/main/iconInformation16.png')]">
            {isActive ? (
              "Sorry your limit is over for this week"
            ) : (
              <>
                If your details are not correct, please{" "}
                <Link
                  href="/profile/detail"
                  className="underline text-blue-500">
                  update your profile
                </Link>
                .
              </>
            )}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="mb-4"
            onClick={onNavigate}
            disabled={isActive}
            variant="link">
            My details are correct
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

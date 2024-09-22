import { ArrowLeft2, LogoutCurve, Profile } from "iconsax-react"
import { CreditCard } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"

import { deleteAccessToken } from "@/lib/deleteAccessToken"

export const MobileProfileHeader = () => {
  const router = useRouter()
  const pathname = usePathname()

  const onLogout = async () => {
    await deleteAccessToken()
    router.push("/auth/sign-in")
  }

  const handleBack = () => {
    router.back()
  }

  const taskType = pathname?.includes("listening")
    ? "Listening"
    : pathname?.includes("reading")
      ? "Reading"
      : pathname?.includes("writing")
        ? "Writing"
        : pathname?.includes("speaking")
          ? "Speaking"
          : null

  const isHistoryDetailPath = taskType !== null

  return (
    <header className="w-full flex sm:hidden flex-row items-center justify-between h-20 px-[18px] border-b bg-white shadow-sm z-50 sticky top-0">
      {isHistoryDetailPath ? (
        <>
          <Button
            onClick={handleBack}
            variant="link"
            className="text-xl text-black">
            <ArrowLeft2 size="20" />
          </Button>
          <p className="text-lg font-bold text-primary text-center flex-1">
            {taskType}
          </p>
          <div className="w-[50px]" />
        </>
      ) : (
        <>
          <p className="text-2xl font-bold text-primary">IELTS</p>
          {pathname === "/profile/detail" ? (
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-row items-center rounded-[8px] justify-center space-x-2 h-11 w-[128px] bg-[#FFE5E5] cursor-pointer">
                  <LogoutCurve size="20" color="#DD3333" />
                  <p className="text-[#DD3333] text-sm">Log out</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[370px] rounded-[10px]">
                <div className="flex flex-col justify-between items-center">
                  <div className="bg-[#FFE5E5] h-20 w-20 rounded-full flex items-center justify-center">
                    <LogoutCurve size="32" color="#DD3333" />
                  </div>
                  <div className="text-center pt-[14px]">
                    <p className="text-[20px] font-medium">Log out</p>
                    <p className="text-sm text-gray-500">
                      Are you sure you want to log out?
                    </p>
                  </div>
                </div>
                <DialogFooter className="flex justify-center items-center mt-[39px]">
                  <div className="flex justify-center items-center space-x-2">
                    <DialogClose asChild>
                      <Button type="button" className="w-[150px] rounded-xl">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      onClick={onLogout}
                      className="w-[150px] rounded-xl"
                      variant="destructive">
                      Log out
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            <Button
              onClick={() => router.push("packages")}
              variant="outline"
              className="flex items-center text-center text-primary border-primary rounded-[8px] h-10">
              <div>
                <CreditCard size="20" strokeWidth={3} />
              </div>
              <p className="ml-1">Buy Package</p>
            </Button>
          )}
        </>
      )}
    </header>
  )
}

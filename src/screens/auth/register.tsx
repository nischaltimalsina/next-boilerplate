import { buttonVariants } from "@/components/ui"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SignupForm } from "./_components"
import { Icons } from "@/components/shared/icons"

export function Register() {
  return (
    <div className="container grid h-full grow grid-cols-2 gap-6 py-6">
      <div className="rounded-lg bg-accent p-6">
        <Icons.logo className="size-12" />
      </div>
      <div className="flex size-full flex-col items-center justify-between">
        <div className="flex w-full justify-end">
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            Login
          </Link>
        </div>
        <SignupForm className="w-full max-w-sm" />
        <div className=""></div>
      </div>
    </div>
  )
}

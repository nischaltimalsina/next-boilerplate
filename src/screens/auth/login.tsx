import React from "react"
import { buttonVariants } from "@/components/ui"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { LoginForm } from "./_components"
import { Icons } from "@/components/shared/icons"

export function Login() {
  return (
    <div className="container grid h-full grow grid-cols-2 gap-6 py-6">
      <div className="rounded-lg bg-accent p-6">
        <Icons.logo className="size-12" />
      </div>
      <div className="flex size-full flex-col items-center justify-between">
        <div className="flex w-full justify-end">
          <Link
            href="/register"
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            Register
          </Link>
        </div>
        <React.Suspense
          fallback={
            <Icons.spinner className="size-12 animate-spin text-primary" />
          }
        >
          <LoginForm className="w-full max-w-sm" />
        </React.Suspense>
        <div className=""></div>
      </div>
    </div>
  )
}

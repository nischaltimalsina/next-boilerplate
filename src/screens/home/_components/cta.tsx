import { Button, buttonVariants } from "@/components/ui"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

export const Cta = () => {
  return (
    <div className="flex min-h-96 w-full flex-col items-center justify-center gap-6 rounded-3xl bg-primary/20 p-6 py-24">
      <h3 className="max-w-4xl text-balance text-center text-3xl font-semibold !leading-[1.1] md:text-5xl lg:text-pretty lg:text-7xl">
        Ready To Grow Your Business With Us?
      </h3>
      <p className="max-w-xl text-center text-base md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam.
      </p>
      <div className="flex items-center gap-4">
        <Button size={"lg"} className="rounded-full text-background">
          Get Started Now
        </Button>
        <Link
          href={"/login"}
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "rounded-full bg-transparent text-base font-medium"
          )}
        >
          Login
        </Link>
      </div>
    </div>
  )
}

import { Button, buttonVariants } from "@/components/ui"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

export const Pricing = () => {
  return (
    <div className="space-y-12 py-32 md:py-52">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
        <Link
          href={"/login"}
          className={cn(
            buttonVariants({ size: "default", variant: "outline" }),
            "rounded-full text-base font-normal"
          )}
        >
          View Subscription Details <ArrowRight className="ml-4 size-4" />
        </Link>
        <div className="text-center">
          <h3 className="max-w-4xl text-balance text-2xl font-medium !leading-[1.3] md:text-4xl lg:text-pretty lg:text-5xl">
            Friendly Pricing Plans
          </h3>
          <p className="max-w-lg text-base md:max-w-full md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex w-full flex-col items-center md:items-start">
          <p className="text-sm font-semibold">Lite Plan</p>
          <p className="text-2xl font-medium md:text-4xl">
            $19<span className="text-sm text-muted-foreground">/month</span>
          </p>
          <p className="mt-4 max-w-sm text-sm font-light md:max-w-full md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
          <Button
            variant={"outline"}
            className="mt-6 w-full max-w-lg rounded-full border-primary/30 bg-primary/40 hover:bg-primary/50 md:max-w-full"
          >
            Start a Free Trial <ArrowRight className="ml-4 size-4" />
          </Button>
        </div>
        <div className="flex w-full flex-col items-center md:items-start">
          <p className="text-sm font-semibold">Pro Plan</p>
          <p className="text-2xl font-medium md:text-4xl">
            $49 <span className="text-sm text-muted-foreground">/month</span>
          </p>
          <p className="mt-4 max-w-sm text-sm font-light md:max-w-full md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
          <Button className="mt-6 w-full max-w-lg rounded-full text-background md:max-w-full">
            Start a Free Trial <ArrowRight className="ml-4 size-4" />
          </Button>
        </div>
        <div className="flex w-full flex-col items-center md:items-start">
          <p className="text-sm font-semibold">Plus Plan</p>
          <p className="text-2xl font-medium md:text-4xl">
            $99<span className="text-sm text-muted-foreground">/month</span>
          </p>
          <p className="mt-4 max-w-sm text-sm font-light md:max-w-full md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
          <Button
            variant={"outline"}
            className="mt-6 w-full max-w-lg rounded-full border-primary/30 bg-primary/40 hover:bg-primary/50 md:max-w-full"
          >
            Start a Free Trial <ArrowRight className="ml-4 size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

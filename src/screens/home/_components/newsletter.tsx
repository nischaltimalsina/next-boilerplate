import { Button, Input } from "@/components/ui"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Newsletter = () => {
  return (
    <div className="mt-12 flex w-full flex-wrap justify-between gap-8 rounded-3xl bg-accent p-8">
      <div className="space-y-4">
        <Link href="/" className="flex w-full max-w-xs items-center space-x-2">
          <Image
            src={"/android-chrome-192x192.png"}
            alt="My Social View"
            height={32}
            width={32}
          />
          <span className="text-xl lowercase">
            my <strong>social</strong> view
          </span>
        </Link>
        <p className="max-w-sm font-light leading-none md:text-lg">
          See the latest and upcoming posts, stories and ans, and schedule
          content
        </p>
      </div>
      <div className="w-full max-w-md space-y-4">
        <p className="font-semibold leading-none md:text-lg">
          Subscribe Our Newsletter
        </p>
        <div className="flex gap-4">
          <Input
            placeholder="Enter Your Email"
            className="h-12 bg-background"
          />
          <Button size={"lg"} className="">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}

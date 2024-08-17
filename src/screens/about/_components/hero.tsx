/* eslint-disable @next/next/no-img-element */
import { Button, buttonVariants } from "@/components/ui"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Hero = () => {
  return (
    <section className="relative pt-28">
      <div className="absolute left-0 top-0 h-96 w-96">
        <Image
          src={"/android-chrome-192x192.png"}
          alt="My Social View"
          className="ml-40 mt-32 opacity-10"
          height={32}
          width={32}
        />
        <Image
          src={"/android-chrome-192x192.png"}
          alt="My Social View"
          className="-mt-24 ml-48 opacity-10"
          height={48}
          width={48}
        />
      </div>
      <div className="mx-auto items-center justify-between gap-x-12 overflow-hidden md:flex ">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h2 className="text-4xl font-bold  md:text-5xl">About Us</h2>
          <p className="text-xl font-light md:text-2xl">
            My Social View’s company and culture are a lot like our product.
            They’re crafted, not cobbled, for a delightful experience.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <div className="flex items-center gap-4">
              <Button size={"lg"} className="rounded-full text-background">
                Get Started Now
              </Button>
              <Link
                href={"/login"}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full text-base font-medium"
                )}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-14 h-96 w-full flex-none rounded-3xl bg-primary/20 md:mt-0 md:max-w-xl"></div>
      </div>
    </section>
  )
}

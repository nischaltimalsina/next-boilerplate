/* eslint-disable @next/next/no-img-element */

import { Button, buttonVariants } from "@/components/ui"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"
export const Hero = () => {
  return (
    <section>
      <div className="gap-12 py-12 text-gray-600">
        <div className="relative flex gap-10">
          <div className="absolute right-0 top-0 -z-10 h-full w-full max-w-xl opacity-40 md:opacity-70">
            <img
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
              className="w-full origin-left rotate-12 rounded-lg border shadow"
              alt="placeholder-1"
            />
            <img
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
              className="-mt-16 ml-auto h-96 w-96 origin-left -rotate-3 rounded-lg border shadow"
              alt="placeholder-2"
            />
          </div>
          <div className="z-10 flex flex-col gap-24 lg:gap-56">
            <div className="max-w-sm space-y-3">
              <p className="text-2xl font-medium">
                Unlock Your Social Insights
              </p>
              <p className="text-lg">
                Lorem fusce orci enim scelerisque phasellus congue nibh at quam
                venenatis vel gravida elit enim aliquet.
              </p>
            </div>
            <div className="w-full max-w-2xl space-y-6">
              <h2 className="text-balance text-4xl !leading-[1.3] md:text-5xl lg:text-pretty lg:text-6xl ">
                Your Gateway To Social Media Insights And Success
              </h2>
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
        </div>
      </div>
    </section>
  )
}

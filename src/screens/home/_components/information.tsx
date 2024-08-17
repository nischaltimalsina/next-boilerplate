import { buttonVariants } from "@/components/ui"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

export const Information = () => {
  return (
    <div className="space-y-14 py-32 md:py-56">
      <Link
        href={"/login"}
        className={cn(
          buttonVariants({ size: "default", variant: "outline" }),
          "rounded-full text-base font-normal"
        )}
      >
        More About My Social View
      </Link>

      <h3 className="max-w-4xl text-balance text-2xl !leading-[1.3] md:text-4xl lg:text-pretty lg:text-5xl">
        My Social View Empowers You To Navigate The Dynamic World Of Social
        Media With Unparalleled Precision
      </h3>
      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex gap-12">
          <div className="">
            <p className="text-2xl font-medium md:text-4xl">250</p>
            <p className="text-xs sm:text-base">Active Users</p>
          </div>
          <div className="">
            <p className="text-2xl font-medium md:text-4xl">250</p>
            <p className="text-xs sm:text-base">Active Users</p>
          </div>
          <div className="">
            <p className="text-2xl font-medium md:text-4xl">250</p>
            <p className="text-xs sm:text-base">Active Users</p>
          </div>
        </div>
        <p className="max-w-sm text-base">
          Lorem fusce orci enim scelerisque phasellus congue nibh at quam
          venenatis vel gravida elit enim aliquet.
        </p>
      </div>
    </div>
  )
}

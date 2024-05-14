/* eslint-disable @next/next/no-img-element */

import React from "react"
import { StarFilledIcon } from "@radix-ui/react-icons"
export const Hero = () => {
  return (
    <section>
      <div className="gap-12 py-28 text-gray-600">
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <h1 className="text-sm font-medium text-indigo-600">
            Build products for everyone
          </h1>
          <h2 className="mx-auto text-4xl font-extrabold text-gray-800 md:text-5xl">
            Start your projects faster with{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#E114E5] bg-clip-text text-transparent">
              the best NEXT BOILERPLATE
            </span>
          </h2>
          <p className="mx-auto max-w-2xl">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="#features"
              className="block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-lg duration-150 hover:bg-indigo-500 hover:shadow-none active:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="https://github.com/nischaltimalsina/next-boilerplate.git"
              className="flex items-center gap-2 rounded-lg border px-4 py-2 font-medium text-gray-700 duration-150 hover:text-gray-500 active:bg-gray-100"
            >
              Leave a Star on Github{" "}
              <StarFilledIcon className="size-6 text-amber-400" />
            </a>
          </div>
        </div>
        <div className="mt-14">
          <img
            src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
            className="w-full rounded-lg border shadow-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

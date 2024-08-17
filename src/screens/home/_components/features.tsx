import { Button, buttonVariants } from "@/components/ui"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"
const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Best Architecture",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Next Auth Implementation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
        />
      </svg>
    ),
    title: "Build on your terms",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
  },
]
export const Features = () => {
  return (
    <section id="features" className="py-14">
      <div className="space-y-32 md:space-y-56">
        <div className="space-y-32 md:space-y-56 ">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3  [&>.feature-1]:pl-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} md:odd:mt-12 lg:odd:mt-32`}
              >
                <div className="grid h-64 w-full place-content-center rounded-3xl bg-accent lg:h-96">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border text-muted-foreground">
                    {item.icon}
                  </div>
                </div>
                <h4 className="mt-4 text-xl font-medium lg:text-3xl ">
                  {item.title}
                </h4>
                <p className=" mt-2">{item.desc}</p>
              </li>
            ))}
          </ul>
          <div className="grid gap-4 md:grid-cols-2 md:gap-10">
            <div className="space-y-6 py-10 md:space-y-10">
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
                Keeping Track Of Any Social Media Performance Is Very Important
              </h3>
              <div className="space-y-6">
                <p className="max-w-sm text-base">
                  Lorem fusce orci enim scelerisque phasellus congue nibh at
                  quam venenatis vel gravida elit enim aliquet.
                </p>
                <Button size={"lg"} className="rounded-full text-background">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="aspect-video w-full rounded-[1.75rem] bg-primary/20 p-8 pr-0 md:aspect-auto">
              <div className="size-full rounded-l-3xl bg-accent brightness-90"></div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-10">
            <div className="aspect-video w-full rounded-[1.75rem] bg-primary/20 p-8 pb-0 md:aspect-auto">
              <div className="size-full rounded-t-3xl bg-accent brightness-90"></div>
            </div>
            <div className="space-y-6 py-10 md:space-y-10">
              <Link
                href={"/login"}
                className={cn(
                  buttonVariants({ size: "default", variant: "outline" }),
                  "pointer-events-none invisible rounded-full text-base font-normal"
                )}
              >
                More About My Social View
              </Link>

              <h3 className="max-w-4xl text-balance text-2xl !leading-[1.3] md:text-4xl lg:text-pretty lg:text-5xl">
                Keeping Track Of Any Social Media Performance Is Very Important
              </h3>
              <div className="space-y-6">
                <p className="max-w-sm text-base">
                  Lorem fusce orci enim scelerisque phasellus congue nibh at
                  quam venenatis vel gravida elit enim aliquet.
                </p>
                <Button size={"lg"} className="rounded-full text-background">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full space-y-16">
          <h3 className="mx-auto max-w-4xl text-balance text-center text-2xl !leading-[1.3] md:text-4xl lg:text-pretty lg:text-5xl">
            Understand Your Competitor’s Social Media Pattern And Learn From
            Those To Improve Yours
          </h3>
          <div className="aspect-video h-full w-full rounded-3xl bg-accent"></div>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3  [&>.feature-1]:pl-0">
            {features.map((item, idx) => (
              <li key={idx} className={`feature-${idx + 1}`}>
                <div className="grid h-24 w-24 place-content-center rounded-3xl bg-primary/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border text-muted-foreground">
                    {item.icon}
                  </div>
                </div>
                <h4 className="mt-4 text-xl font-medium lg:text-2xl ">
                  {item.title}
                </h4>
                <p className=" mt-2">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

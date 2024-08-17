import { buttonVariants } from "@/components/ui"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Cta, Newsletter } from "../home/_components"
import { Hero, QuestionAnswers } from "./_components"

export const Faq = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <div className="grid space-y-10 md:grid-cols-5">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-primary"></div>
            <p className="text-sm font-light">FAQS</p>
          </div>
          <h3 className="text-3xl font-medium">Questions? Answers.</h3>
          <p className="font-light">Do you have any other question?</p>
          <Link
            href={"/contact"}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "rounded-full text-base font-medium"
            )}
          >
            Message Us
          </Link>
        </div>
        <div className="col-span-3">
          <QuestionAnswers />
        </div>
      </div>
      <Cta />
      <Newsletter />
    </div>
  )
}

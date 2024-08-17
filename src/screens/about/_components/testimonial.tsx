import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { StarFilledIcon } from "@radix-ui/react-icons"

export const Testimonial = () => {
  return (
    <div>
      <Carousel>
        <div className="space-y-2.5 pb-8">
          <h3 className="text-3xl font-medium">What our clients have to say</h3>
          <div className="flex gap-4">
            <p className="mr-auto max-w-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam.
            </p>
            <CarouselPrevious className="relative left-0 top-0 h-10 w-10 translate-x-0 translate-y-0 rounded-md" />
            <CarouselNext className="relative left-0 top-0 h-10 w-10 translate-x-0 translate-y-0 rounded-md border-none bg-primary text-background hover:bg-primary/80 hover:text-background" />
          </div>
        </div>
        <CarouselContent>
          <CarouselItem>
            <TestimonialItem />
          </CarouselItem>
          <CarouselItem>
            <TestimonialItem />
          </CarouselItem>
          <CarouselItem>
            <TestimonialItem />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

const TestimonialItem = () => {
  return (
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-2 rounded-3xl bg-primary/20"></div>
      <div className="col-span-4 space-y-8 rounded-3xl bg-primary/20 p-6 lg:p-8">
        <div className="flex text-primary">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarFilledIcon className="size-5" />
          ))}
        </div>
        <div className="space-y-4">
          <p className="text-3xl">"Revitalized my work approach"</p>
          <p className="text-lg font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <p className="flex items-center gap-2">
          Stephanie Powell
          <span className="text-sm text-muted-foreground">
            | VP of Sales at SalesForce
          </span>
        </p>
      </div>
    </div>
  )
}

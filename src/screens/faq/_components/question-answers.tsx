import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const QuestionAnswers = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Lorem by Ipsum?</AccordionTrigger>
        <AccordionContent>
          Lorem by Ipsum (LBI) is a critical process where individuals can gain
          citizenship by investing in a country. The process involves applying
          to a government-approved program, undergoing a background check, and,
          if approved, making an economic contribution and receiving
          citizenship. The specifics of CBI programs vary by country.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Can I get a new account and keep my current one?
        </AccordionTrigger>
        <AccordionContent>
          Lorem by Ipsum (LBI) is a critical process where individuals can gain
          citizenship by investing in a country. The process involves applying
          to a government-approved program, undergoing a background check, and,
          if approved, making an economic contribution and receiving
          citizenship. The specifics of CBI programs vary by country.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What platforms are supported by MSV?
        </AccordionTrigger>
        <AccordionContent>
          Lorem by Ipsum (LBI) is a critical process where individuals can gain
          citizenship by investing in a country. The process involves applying
          to a government-approved program, undergoing a background check, and,
          if approved, making an economic contribution and receiving
          citizenship. The specifics of CBI programs vary by country.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What are the minimum requirements?</AccordionTrigger>
        <AccordionContent>
          Lorem by Ipsum (LBI) is a critical process where individuals can gain
          citizenship by investing in a country. The process involves applying
          to a government-approved program, undergoing a background check, and,
          if approved, making an economic contribution and receiving
          citizenship. The specifics of CBI programs vary by country.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          How fast is the process of getting a subscription?
        </AccordionTrigger>
        <AccordionContent>
          Lorem by Ipsum (LBI) is a critical process where individuals can gain
          citizenship by investing in a country. The process involves applying
          to a government-approved program, undergoing a background check, and,
          if approved, making an economic contribution and receiving
          citizenship. The specifics of CBI programs vary by country.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

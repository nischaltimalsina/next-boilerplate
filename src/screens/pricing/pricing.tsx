import React from "react"
import { Hero, Plans } from "./_components"
import { Cta, Newsletter } from "../home/_components"

export const Pricing = () => {
  return (
    <div className="container space-y-20 pt-14">
      <Hero />
      <Plans />
      <Cta />
      <Newsletter />
    </div>
  )
}

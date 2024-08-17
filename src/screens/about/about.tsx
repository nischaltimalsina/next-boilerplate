import { Cta, Newsletter } from "../home/_components"
import { Hero, Story, Testimonial } from "./_components"

export const About = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Story />
      <Testimonial />
      <Cta />
      <Newsletter />
    </div>
  )
}

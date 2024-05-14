import { FAQ, Features, Hero, Testimonials } from "./_components"

export const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Features />
      <FAQ/>
      <Testimonials/>
    </div>
  )
}

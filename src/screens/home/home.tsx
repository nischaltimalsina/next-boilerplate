import {
  Cta,
  Features,
  Hero,
  Information,
  Newsletter,
  Pricing,
} from "./_components"

export const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Information />
      <Features />
      <Pricing />
      <Cta />
      <Newsletter />
    </div>
  )
}

import { Button } from "@/components/ui"

export const Story = () => {
  return (
    <div className="space-y-24 py-12">
      <div className="grid gap-4 sm:gap-10 md:grid-cols-2 lg:gap-20">
        <div className="aspect-video w-full rounded-[1.75rem] bg-primary/20 p-8 pb-0 md:aspect-auto">
          <div className="size-full rounded-t-3xl bg-accent brightness-90"></div>
        </div>
        <div className="space-y-6 py-6 md:space-y-10">
          <h3 className="max-w-4xl text-balance text-2xl !leading-[1.3] md:text-4xl lg:text-pretty lg:text-5xl">
            Our Story
          </h3>
          <div className="space-y-6">
            <p className="max-w-xl text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
            </p>
            <Button size={"lg"} className="rounded-full text-background">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:gap-10 md:grid-cols-2 lg:gap-20">
        <div className="space-y-6 py-6 md:space-y-10">
          <h3 className="max-w-4xl text-balance text-2xl !leading-[1.3] md:text-4xl lg:text-pretty lg:text-5xl">
            Who are We?
          </h3>
          <div className="space-y-6">
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    </div>
  )
}

import { MainNav } from "@/components/navigation/main-nav"
import { SiteFooter } from "@/components/navigation/site-footer"
import { marketingConfig } from "@/config/marketing"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <header className="sticky top-0 z-40 border-b border-background bg-background/40 backdrop-blur-sm">
        <div className="container flex h-24 items-center py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1 overflow-hidden">{children}</main>
      <SiteFooter />
    </div>
  )
}

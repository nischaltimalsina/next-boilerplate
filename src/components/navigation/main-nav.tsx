/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import * as React from "react"

import { MobileNav } from "@/components/navigation/mobile-nav"
import { Icons } from "@/components/shared/icons"
import { cn } from "@/lib/utils"
import { type MainNavItem } from "@/types"
import Image from "next/image"
import { Button, buttonVariants } from "../ui"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex w-full flex-row-reverse justify-between gap-6 lg:flex-row lg:gap-10">
      <Link
        href="/"
        className="hidden w-full items-center space-x-2 lg:flex lg:max-w-xs"
      >
        <Image
          src={"/android-chrome-192x192.png"}
          alt="My Social View"
          height={32}
          width={32}
        />
        <span className="hidden text-xl lowercase text-primary sm:inline-block">
          my <strong>social</strong> view
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-8 lg:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg transition-colors hover:text-foreground/80 sm:text-base",
                item.href === `/${segment ?? ""}`
                  ? "text-primary"
                  : "text-foreground",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <div className="flex items-center gap-4">
        <Button size={"lg"} className="rounded-full text-background">
          Get Started Now
        </Button>
        <Link
          href={"/login"}
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "rounded-full text-base font-medium"
          )}
        >
          Login
        </Link>
      </div>
      <button
        className="flex items-center space-x-2 lg:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav setOpen={setShowMobileMenu} items={items}>
          {children}
        </MobileNav>
      )}
    </div>
  )
}

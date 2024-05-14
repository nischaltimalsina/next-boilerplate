/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import * as React from "react"

import { MobileNav } from "@/components/navigation/mobile-nav"
import { Icons } from "@/components/shared/icons"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { type MainNavItem } from "@/types"
import { ModeToggle } from "../shared/mode-toggle"
import { signOut, useSession } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const { data, status } = useSession()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex w-full justify-between gap-6 md:gap-10">
      <Link
        href="/"
        className="hidden items-center justify-between space-x-2 md:flex"
      >
        <Icons.logo className="[&>path]:fill-primary" />
        <span className="hidden text-2xl font-bold lowercase text-primary sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
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
      <div className="ml-auto flex items-center gap-4">
        <ModeToggle />
        {status === "unauthenticated" && (
          <Link href={"/login"} className="text-lg font-medium text-primary">
            Login
          </Link>
        )}
        {status === "authenticated" && (
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
              <div className="size-11 overflow-hidden rounded-full border border-primary">
                <img
                  src={data.user.image!}
                  alt={data.user.email!}
                  className="size-full overflow-hidden object-cover"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={async () => await signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  )
}

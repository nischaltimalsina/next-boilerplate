"use client"
import React from "react"
import { SessionProvider as Provider } from "next-auth/react"

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <Provider>{children}</Provider>
}

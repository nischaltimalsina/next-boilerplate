"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import * as React from "react"
import { useForm } from "react-hook-form"
import type * as z from "zod"
import { Icons } from "@/components/shared/icons"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
import Link from "next/link"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

type FormData = z.infer<typeof userAuthSchema>

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const { status } = useSession()
  const router = useRouter()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      username: "kminchelle",
      password: "0lelplR",
    },
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
      callbackUrl: searchParams?.get("from") ?? "/",
    })
    setIsLoading(false)

    return toast({
      title: "Welcome to Next Boilerplate",
      description:
        "You have successfully Signed in. You may continue using your account.",
    })
  }

  React.useEffect(() => {
    if (status === "authenticated") {
      router.replace("/")
    }
  }, [status, router])

  if (status === "loading") {
    return <Icons.spinner className="size-12 animate-spin text-primary" />
  }

  return (
    status !== "authenticated" && (
      <div className={cn("grid gap-6", className)} {...props}>
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Log in to your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password below to access your account.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="username">
                Username
              </Label>
              <Input
                id="username"
                placeholder="username"
                type="text"
                autoCapitalize="none"
                autoComplete="username"
                autoCorrect="off"
                disabled={isLoading || isGitHubLoading}
                {...register("username")}
              />
              {errors?.username && (
                <p className="px-1 text-xs text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                placeholder="password"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                disabled={isLoading || isGitHubLoading}
                {...register("password")}
              />
              {errors?.password && (
                <p className="px-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button className={cn(buttonVariants())} disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 size-4 animate-spin" />
              )}
              Sign In with Username
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between gap-6">
          <p className=" text-sm text-muted-foreground">Need an account? </p>
          <Link
            href="/register"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
          >
            Sign Up
          </Link>{" "}
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={async () => {
            setIsGitHubLoading(true)
            await signIn("google")
          }}
          disabled={isLoading || isGitHubLoading}
        >
          {isGitHubLoading ? (
            <Icons.spinner className="mr-2 size-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 size-4" />
          )}{" "}
          Continue with Google
        </button>
        <p className="text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    )
  )
}

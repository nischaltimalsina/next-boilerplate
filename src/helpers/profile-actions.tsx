import { toast } from "@/components/ui/use-toast"

async function createProfile(userId: string) {
  const response = await fetch(`/api/profile/${userId}`, {
    method: "POST",
  })

  if (!response?.ok) {
    toast({
      title: "Something went wrong.",
      description: "Your post was not deleted. Please try again.",
      variant: "destructive",
    })
  }

  return true
}

async function updateProfile(userId: string) {
  const response = await fetch(`/api/profile/${userId}`, {
    method: "PATCH",
  })

  if (!response?.ok) {
    toast({
      title: "Something went wrong.",
      description: "Your post was not deleted. Please try again.",
      variant: "destructive",
    })
  }

  return true
}

export { createProfile, updateProfile }

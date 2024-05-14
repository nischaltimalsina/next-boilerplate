import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@/components/ui"

export function ProfileCard() {
  return (
    <Card className="max-w-sm">
      <CardHeader className="gap-2">
        <div className="flex gap-3">
          <Avatar className="size-12 rounded-lg">
            <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>
          <div className="w-4/5">
            <p className="font-medium">Joanne Peterson</p>
            <p className="text-sm font-light text-muted-foreground">
              Influencer
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-4 h-48" />
        <Skeleton className="h-4 w-4/5" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-8 w-[120px]" />
      </CardFooter>
    </Card>
  )
}

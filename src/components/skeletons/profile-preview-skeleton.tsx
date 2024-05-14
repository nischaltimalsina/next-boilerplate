import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ProfilePreviewLoader() {
  return (
    <Card className="max-w-sm">
      <CardHeader className="gap-2">
        <div className="flex gap-3">
          <Skeleton className="h-12 w-12" />
          <div className="w-4/5 space-y-2">
            <Skeleton className="h-5 w-3/5" />
            <Skeleton className="h-5 w-2/5" />
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

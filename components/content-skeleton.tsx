import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ContentSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <CardHeader className="p-4 pb-0">
        <Skeleton className="h-5 w-2/3" />
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-5 w-16 mt-2" />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex gap-1">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </CardFooter>
    </Card>
  )
}

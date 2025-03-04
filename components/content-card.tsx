"use client"

import { useState } from "react"
import Image from "next/image"
import { BookmarkPlus, ThumbsDown, ThumbsUp } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

interface ContentCardProps {
  id: string
  title: string
  description: string
  image: string
  type: "video" | "article" | "podcast"
  category: string
  duration?: string
}

export function ContentCard({ id, title, description, image, type, category, duration }: ContentCardProps) {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [saved, setSaved] = useState(false)
  const { toast } = useToast()

  const handleLike = () => {
    if (disliked) setDisliked(false)
    setLiked(!liked)

    toast({
      title: liked ? "Removed like" : "Added like",
      description: liked ? "Your preference has been updated" : "We'll recommend more content like this",
      duration: 2000,
    })
  }

  const handleDislike = () => {
    if (liked) setLiked(false)
    setDisliked(!disliked)

    toast({
      title: disliked ? "Removed dislike" : "Added dislike",
      description: disliked ? "Your preference has been updated" : "We'll show less content like this",
      duration: 2000,
    })
  }

  const handleSave = () => {
    setSaved(!saved)

    toast({
      title: saved ? "Removed from saved" : "Saved for later",
      description: saved ? "Content removed from your saved items" : "Content added to your saved items",
      duration: 2000,
    })
  }

  const typeIcon = {
    video: "🎬",
    article: "📄",
    podcast: "🎧",
  }

  return (
    <Card className="content-card overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge variant="secondary" className="opacity-90">
            {typeIcon[type]} {type}
          </Badge>
          {duration && (
            <Badge variant="outline" className="bg-background/80">
              {duration}
            </Badge>
          )}
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <h3 className="font-semibold line-clamp-1">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <Badge variant="outline" className="mt-2">
          {category}
        </Badge>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className={cn(liked && "text-green-500")} onClick={handleLike}>
            <ThumbsUp className="h-4 w-4" />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon" className={cn(disliked && "text-red-500")} onClick={handleDislike}>
            <ThumbsDown className="h-4 w-4" />
            <span className="sr-only">Dislike</span>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className={cn(saved && "text-primary")} onClick={handleSave}>
          <BookmarkPlus className="h-4 w-4" />
          <span className="sr-only">Save</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

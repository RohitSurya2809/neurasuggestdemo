"use client"

import type React from "react"

import Link from "next/link"
import { BookOpen, Compass, Film, Headphones, LayoutDashboard, Newspaper, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 hidden md:block", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Main</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/discover">
                <Compass className="mr-2 h-4 w-4" />
                Discover
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Categories</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Film className="mr-2 h-4 w-4" />
              Videos
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Newspaper className="mr-2 h-4 w-4" />
              Articles
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Headphones className="mr-2 h-4 w-4" />
              Podcasts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Books
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Genres</h2>
          <ScrollArea className="h-[200px] px-1">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                Technology
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Entertainment
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Education
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Science
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Health
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Business
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Sports
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Travel
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Food
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Music
              </Button>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

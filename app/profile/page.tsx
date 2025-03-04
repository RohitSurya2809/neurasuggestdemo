"use client"

import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { ContentCard } from "@/components/content-card"
import { mockRecommendations } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookmarkIcon, Settings, User } from "lucide-react"

export default function ProfilePage() {
  // Filter for saved items (just use first 3 items for demo)
  const savedItems = mockRecommendations.slice(0, 3)

  // Filter for history items (use next 4 items for demo)
  const historyItems = mockRecommendations.slice(3, 7)

  // Get category preferences (for demo)
  const categoryPreferences = [
    { name: "Technology", percentage: 65 },
    { name: "Science", percentage: 45 },
    { name: "Education", percentage: 30 },
    { name: "Design", percentage: 20 },
  ]

  // Get content type preferences (for demo)
  const contentTypePreferences = [
    { name: "Videos", percentage: 55 },
    { name: "Articles", percentage: 35 },
    { name: "Podcasts", percentage: 10 },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="container grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-6 py-6">
          <Sidebar className="hidden md:block" />
          <main className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">John Doe</h1>
                  <p className="text-muted-foreground">Member since January 2023</p>
                </div>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Settings className="h-4 w-4" /> Account Settings
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Category Preferences</CardTitle>
                  <CardDescription>Based on your viewing history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categoryPreferences.map((category) => (
                    <div key={category.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{category.name}</span>
                        <span className="text-sm text-muted-foreground">{category.percentage}%</span>
                      </div>
                      <Progress value={category.percentage} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Type Preferences</CardTitle>
                  <CardDescription>What you like to consume</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contentTypePreferences.map((type) => (
                    <div key={type.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{type.name}</span>
                        <span className="text-sm text-muted-foreground">{type.percentage}%</span>
                      </div>
                      <Progress value={type.percentage} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="saved">
              <TabsList>
                <TabsTrigger value="saved" className="flex items-center gap-1">
                  <BookmarkIcon className="h-4 w-4" /> Saved
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center gap-1">
                  <User className="h-4 w-4" /> History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="saved" className="mt-4">
                <h2 className="text-xl font-semibold mb-4">Saved Content</h2>
                <div className="content-grid animate-fade-in">
                  {savedItems.map((item) => (
                    <ContentCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      type={item.type}
                      category={item.category}
                      duration={item.duration}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-4">
                <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
                <div className="content-grid animate-fade-in">
                  {historyItems.map((item) => (
                    <ContentCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      type={item.type}
                      category={item.category}
                      duration={item.duration}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

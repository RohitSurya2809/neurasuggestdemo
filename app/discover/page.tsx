"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { ContentCard } from "@/components/content-card"
import { ContentSkeleton } from "@/components/content-skeleton"
import { mockRecommendations } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Compass, Film, Newspaper, Headphones } from "lucide-react"

export default function DiscoverPage() {
  const [loading, setLoading] = useState(false)

  // Shuffle and take first 8 items for discovery
  const shuffled = [...mockRecommendations].sort(() => 0.5 - Math.random()).slice(0, 8)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="container grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-6 py-6">
          <Sidebar className="hidden md:block" />
          <main className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <Compass className="h-8 w-8" /> Discover
              </h1>
              <p className="text-muted-foreground">
                Explore new content based on your interests and browsing patterns.
              </p>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-1">
                  <Film className="h-4 w-4" /> Videos
                </TabsTrigger>
                <TabsTrigger value="articles" className="flex items-center gap-1">
                  <Newspaper className="h-4 w-4" /> Articles
                </TabsTrigger>
                <TabsTrigger value="podcasts" className="flex items-center gap-1">
                  <Headphones className="h-4 w-4" /> Podcasts
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recommended for You</h2>
                  <Button variant="outline" size="sm">
                    Refresh
                  </Button>
                </div>

                {loading ? (
                  <div className="content-grid">
                    {Array(8)
                      .fill(0)
                      .map((_, i) => (
                        <ContentSkeleton key={i} />
                      ))}
                  </div>
                ) : (
                  <div className="content-grid animate-fade-in">
                    {shuffled.map((item) => (
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
                )}
              </TabsContent>

              <TabsContent value="videos" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recommended Videos</h2>
                  <Button variant="outline" size="sm">
                    Refresh
                  </Button>
                </div>

                <div className="content-grid animate-fade-in">
                  {shuffled
                    .filter((item) => item.type === "video")
                    .map((item) => (
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

              <TabsContent value="articles" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recommended Articles</h2>
                  <Button variant="outline" size="sm">
                    Refresh
                  </Button>
                </div>

                <div className="content-grid animate-fade-in">
                  {shuffled
                    .filter((item) => item.type === "article")
                    .map((item) => (
                      <ContentCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        type={item.type}
                        category={item.category}
                      />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="podcasts" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recommended Podcasts</h2>
                  <Button variant="outline" size="sm">
                    Refresh
                  </Button>
                </div>

                <div className="content-grid animate-fade-in">
                  {shuffled
                    .filter((item) => item.type === "podcast")
                    .map((item) => (
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

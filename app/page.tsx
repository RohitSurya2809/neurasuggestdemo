"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { ContentCard } from "@/components/content-card"
import { ContentSkeleton } from "@/components/content-skeleton"
import { CategoryFilter } from "@/components/category-filter"
import { mockRecommendations, mockTrending } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["Technology", "Design", "Education", "Science", "Marketing", "Psychology"]

  const filteredRecommendations =
    activeFilter === "All" ? mockRecommendations : mockRecommendations.filter((item) => item.category === activeFilter)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="container grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-6 py-6">
          <Sidebar className="hidden md:block" />
          <main className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
              <p className="text-muted-foreground">
                Here are your personalized recommendations powered by Graph Neural Networks.
              </p>
            </div>

            <Tabs defaultValue="foryou">
              <TabsList>
                <TabsTrigger value="foryou">For You</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>
              <TabsContent value="foryou" className="mt-4">
                <CategoryFilter categories={categories} onFilterChange={setActiveFilter} />

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
                    {filteredRecommendations.map((item) => (
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
              <TabsContent value="trending" className="mt-4">
                <h2 className="text-xl font-semibold mb-4">What's Trending Now</h2>
                <div className="content-grid animate-fade-in">
                  {mockTrending.map((item) => (
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

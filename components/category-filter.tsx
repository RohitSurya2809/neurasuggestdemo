"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  categories: string[]
  onFilterChange: (category: string) => void
}

export function CategoryFilter({ categories, onFilterChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="flex flex-wrap gap-2 pb-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCategoryClick("All")}
        className={cn(activeCategory === "All" && "bg-primary text-primary-foreground")}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          size="sm"
          onClick={() => handleCategoryClick(category)}
          className={cn(activeCategory === category && "bg-primary text-primary-foreground")}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

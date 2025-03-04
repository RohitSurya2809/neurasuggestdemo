import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mock data for content recommendations
export const mockRecommendations = [
  {
    id: "1",
    title: "Understanding Graph Neural Networks for Recommendation Systems",
    description: "Learn how GNNs are revolutionizing the way we build recommendation engines and personalize content.",
    image: "/placeholder.svg?height=400&width=600",
    type: "video" as const,
    category: "Technology",
    duration: "15:24",
  },
  {
    id: "2",
    title: "The Future of AI in Content Discovery",
    description: "Explore how artificial intelligence is changing the way we discover and consume digital content.",
    image: "/placeholder.svg?height=400&width=600",
    type: "article" as const,
    category: "Technology",
  },
  {
    id: "3",
    title: "How to Build Engaging User Experiences",
    description: "Design principles and techniques for creating interfaces that keep users coming back for more.",
    image: "/placeholder.svg?height=400&width=600",
    type: "video" as const,
    category: "Design",
    duration: "22:15",
  },
  {
    id: "4",
    title: "The Science of Personalization",
    description: "A deep dive into the psychology and technology behind personalized recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    type: "podcast" as const,
    category: "Science",
    duration: "45:30",
  },
  {
    id: "5",
    title: "Machine Learning for Content Creators",
    description: "How content creators can leverage AI to reach the right audience and grow their platform.",
    image: "/placeholder.svg?height=400&width=600",
    type: "article" as const,
    category: "Education",
  },
  {
    id: "6",
    title: "The Ethics of Recommendation Algorithms",
    description: "Examining the ethical implications of AI-driven content recommendation systems.",
    image: "/placeholder.svg?height=400&width=600",
    type: "podcast" as const,
    category: "Technology",
    duration: "38:45",
  },
  {
    id: "7",
    title: "Optimizing Content for Discovery",
    description: "Strategies to ensure your content gets discovered by recommendation algorithms.",
    image: "/placeholder.svg?height=400&width=600",
    type: "video" as const,
    category: "Marketing",
    duration: "18:10",
  },
  {
    id: "8",
    title: "The Psychology of Content Consumption",
    description: "Understanding why we consume the content we do and how it affects our behavior.",
    image: "/placeholder.svg?height=400&width=600",
    type: "article" as const,
    category: "Psychology",
  },
]

// Mock data for trending content
export const mockTrending = [
  {
    id: "t1",
    title: "Web Development Trends for 2023",
    description: "Stay ahead of the curve with these emerging web development technologies and practices.",
    image: "/placeholder.svg?height=400&width=600",
    type: "article" as const,
    category: "Technology",
  },
  {
    id: "t2",
    title: "Introduction to Neural Networks",
    description: "A beginner-friendly guide to understanding neural networks and their applications.",
    image: "/placeholder.svg?height=400&width=600",
    type: "video" as const,
    category: "Education",
    duration: "12:45",
  },
  {
    id: "t3",
    title: "The Rise of Decentralized Applications",
    description: "How blockchain technology is enabling a new generation of decentralized applications.",
    image: "/placeholder.svg?height=400&width=600",
    type: "podcast" as const,
    category: "Technology",
    duration: "52:20",
  },
  {
    id: "t4",
    title: "Designing for Accessibility",
    description: "Best practices for creating inclusive digital experiences for users of all abilities.",
    image: "/placeholder.svg?height=400&width=600",
    type: "video" as const,
    category: "Design",
    duration: "28:15",
  },
]

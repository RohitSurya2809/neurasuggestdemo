import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GNNDiagram } from "@/components/gnn-diagram"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="container py-8 space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">About NeuraSuggest</h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing content discovery with Graph Neural Networks
            </p>
          </div>

          <Separator />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p>
                At NeuraSuggest, we're addressing the challenge of personalized media consumption in today's digital age.
                Users are overwhelmed with endless streams of videos, articles, podcasts, and other media content. Our
                mission is to cut through the noise and deliver personalized recommendations that truly matter to each
                individual user.
              </p>
              <p>
                By leveraging the power of Graph Neural Networks (GNNs), we're able to understand complex relationships
                between users and content, creating a recommendation system that learns and adapts to your preferences
                in real-time.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Technology</h2>
              <p>
                NeuraSuggest uses cutting-edge Graph Neural Networks to model user-content interactions as a graph, where
                nodes represent users and content items, and edges represent interactions like clicks, likes, and
                shares.
              </p>
              <p>
                Unlike traditional recommendation systems, our GNN approach captures the complex, multi-dimensional
                relationships between users and content, enabling more accurate and personalized recommendations that
                improve over time.
              </p>
            </div>
          </div>

          <GNNDiagram />

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Personalization</CardTitle>
                <CardDescription>Tailored to your preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our system analyzes your browsing habits, content interactions, and feedback to create a unique
                  content profile that evolves as your interests change.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Discovery</CardTitle>
                <CardDescription>Find new content you'll love</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Beyond recommending more of what you already like, our system helps you discover new content that
                  aligns with your evolving interests and preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy</CardTitle>
                <CardDescription>Your data, protected</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We take your privacy seriously. All user data is encrypted and securely stored, and we never share
                  your personal information with third parties.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Team</h2>
            <p>
              NeuraSuggest was founded by a team of AI researchers, data scientists, and UX designers passionate about
              solving the content overload problem. With backgrounds from leading tech companies and research
              institutions, our team combines technical expertise with a user-centered approach.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

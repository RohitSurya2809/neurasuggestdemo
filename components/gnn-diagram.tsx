"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function GNNDiagram() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>How Our GNN Recommendation System Works</CardTitle>
        <CardDescription>Graph Neural Networks analyze connections between users and content</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
          <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            {/* Background Grid */}
            <path d="M0 0h800v450H0z" fill="currentColor" fillOpacity="0.05" className="text-primary" />
            <path
              d="M50 50h700v350H50z"
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
              className="text-foreground"
            />

            {/* User Nodes */}
            <circle cx="200" cy="150" r="30" fill="currentColor" className="text-primary" fillOpacity="0.8" />
            <text x="200" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
              User A
            </text>

            <circle cx="200" cy="300" r="30" fill="currentColor" className="text-primary" fillOpacity="0.8" />
            <text x="200" y="305" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
              User B
            </text>

            {/* Content Nodes */}
            <circle cx="400" cy="100" r="25" fill="currentColor" className="text-accent-foreground" fillOpacity="0.8" />
            <text x="400" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              Video 1
            </text>

            <circle cx="400" cy="200" r="25" fill="currentColor" className="text-accent-foreground" fillOpacity="0.8" />
            <text x="400" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              Article 2
            </text>

            <circle cx="400" cy="300" r="25" fill="currentColor" className="text-accent-foreground" fillOpacity="0.8" />
            <text x="400" y="305" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              Podcast 3
            </text>

            <circle cx="400" cy="400" r="25" fill="currentColor" className="text-accent-foreground" fillOpacity="0.8" />
            <text x="400" y="405" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              Video 4
            </text>

            {/* Edges */}
            <line x1="225" y1="135" x2="375" y2="100" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <line x1="225" y1="165" x2="375" y2="200" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <line x1="225" y1="300" x2="375" y2="300" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <line x1="225" y1="315" x2="375" y2="400" stroke="currentColor" strokeWidth="2" className="text-primary" />

            {/* GNN Processing */}
            <rect
              x="500"
              y="175"
              width="100"
              height="100"
              rx="10"
              fill="currentColor"
              className="text-secondary"
              fillOpacity="0.8"
            />
            <text
              x="550"
              y="225"
              textAnchor="middle"
              fill="currentColor"
              fontSize="14"
              fontWeight="bold"
              className="text-secondary-foreground"
            >
              GNN
            </text>

            {/* Arrows to GNN */}
            <path
              d="M425 100 L500 175"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="text-muted-foreground"
            />
            <path
              d="M425 200 L500 200"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="text-muted-foreground"
            />
            <path
              d="M425 300 L500 225"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="text-muted-foreground"
            />
            <path
              d="M425 400 L500 275"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="text-muted-foreground"
            />

            {/* Recommendations */}
            <rect
              x="650"
              y="150"
              width="100"
              height="150"
              rx="10"
              fill="currentColor"
              className="text-primary"
              fillOpacity="0.2"
            />
            <text
              x="700"
              y="175"
              textAnchor="middle"
              fill="currentColor"
              fontSize="12"
              fontWeight="bold"
              className="text-primary"
            >
              Personalized
            </text>
            <text
              x="700"
              y="195"
              textAnchor="middle"
              fill="currentColor"
              fontSize="12"
              fontWeight="bold"
              className="text-primary"
            >
              Recommendations
            </text>

            {/* Arrow from GNN to Recommendations */}
            <path d="M600 225 L650 225" stroke="currentColor" strokeWidth="3" className="text-primary" />
            <polygon points="650,225 640,220 640,230" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      </CardContent>
    </Card>
  )
}

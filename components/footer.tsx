import Link from "next/link"
import { Facebook, Github, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:py-8">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-primary">NeuraSuggest</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">Personalized Media, Powered by AI</p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <nav className="flex gap-4">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} NeuraSuggest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Staff from "@/components/staff"
import Testimonials from "@/components/testimonials"
import BookSession from "@/components/book-session"
import Contact from "@/components/contact"
import MapSection from "@/components/map-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Staff />
      <Testimonials />
      <BookSession />
      <Contact />
      <MapSection />
      <Footer />
    </main>
  )
}

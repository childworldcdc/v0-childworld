"use client"

import { useEffect, useRef } from "react"
import { Brain, Users, BookOpen, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description:
        "One-on-one counseling sessions tailored to each child's unique needs, using evidence-based therapeutic approaches.",
      features: ["Cognitive Behavioral Therapy", "Play Therapy", "Art Therapy"],
    },
    {
      icon: Users,
      title: "Family Counseling",
      description:
        "Sessions involving family members to improve communication, resolve conflicts, and strengthen family bonds.",
      features: ["Family Dynamics", "Conflict Resolution", "Parenting Support"],
    },
    {
      icon: BookOpen,
      title: "Group Therapy",
      description:
        "Therapeutic groups where children can connect with peers, share experiences, and develop social skills.",
      features: ["Social Skills", "Peer Support", "Coping Strategies"],
    },
    {
      icon: Zap,
      title: "Crisis Support",
      description: "Immediate support for children experiencing acute emotional distress or crisis situations.",
      features: ["Emergency Response", "Safety Planning", "Follow-up Care"],
    },
  ]

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-gradient-to-br from-primary/8 via-background to-accent/8 relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-40 left-20 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-accent/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of mental health services designed to support children and adolescents at
            every stage of their journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is ready to help your child thrive. Schedule a consultation with one of our experienced therapists
            today.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

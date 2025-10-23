"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })

      gsap.from(".stat-number", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const testimonials = [
    {
      name: "Sarah's Parent",
      relation: "Parent",
      content:
        "Childworld has been a lifesaver for our family. The therapists are incredibly compassionate and professional. Our daughter has made remarkable progress in just a few months.",
      rating: 5,
    },
    {
      name: "Marcus, Age 14",
      relation: "Patient",
      content:
        "I was nervous about therapy at first, but the team made me feel comfortable and understood. They really helped me work through my anxiety. I'm so grateful.",
      rating: 5,
    },
    {
      name: "Jennifer's Family",
      relation: "Parent",
      content:
        "The family counseling sessions have transformed our relationships. We communicate better now and understand each other more. Highly recommended!",
      rating: 5,
    },
    {
      name: "David, Age 11",
      relation: "Patient",
      content:
        "The art therapy sessions are so cool! I get to express my feelings in creative ways. The therapists are really nice and make me feel heard.",
      rating: 5,
    },
    {
      name: "Robert & Michelle",
      relation: "Parents",
      content:
        "We were struggling to help our son with his behavioral issues. The team at Childworld provided us with practical strategies and genuine support. Amazing experience.",
      rating: 5,
    },
    {
      name: "Emma, Age 13",
      relation: "Patient",
      content:
        "Coming to Childworld helped me realize I'm not alone. The group therapy sessions connected me with other kids who understand what I'm going through.",
      rating: 5,
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-20 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "0.8s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Families Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real stories from families whose lives have been transformed through our compassionate care and professional
            support.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-4 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
          <div className="text-center">
            <p className="stat-number text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Children Helped</p>
          </div>
          <div className="text-center">
            <p className="stat-number text-4xl md:text-5xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="stat-number text-4xl md:text-5xl font-bold text-primary mb-2">10+</p>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

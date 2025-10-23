"use client"

import { useEffect, useRef } from "react"
import { Heart, Target, Users, Lightbulb } from "lucide-react"

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".value-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })

      gsap.from(".vision-content", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We approach every child with empathy, understanding, and genuine care for their wellbeing.",
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Our treatments are grounded in the latest research and proven therapeutic methodologies.",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We involve families in the healing process, recognizing their crucial role in a child's recovery.",
    },
    {
      icon: Lightbulb,
      title: "Holistic Approach",
      description: "We address the whole child—emotional, behavioral, social, and developmental needs.",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-40 left-10 w-32 h-32 bg-primary/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/25 to-primary/25 rounded-2xl"></div>
            <img
              src="/children-therapy-session-supportive-environment.jpg"
              alt="Therapy session with supportive environment"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 vision-content">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a world where every child has access to compassionate, professional mental health support that
                empowers them to overcome challenges and reach their full potential.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Childworld is committed to providing exceptional mental health services to children and adolescents,
                helping them navigate emotional challenges, build resilience, and develop healthy coping strategies in a
                safe, nurturing environment.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-foreground mb-3">Our Goals</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">Provide accessible, evidence-based mental health care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">Build strong therapeutic relationships with each child</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">Support families through the healing journey</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">Promote mental health awareness in our community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="value-card bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
                >
                  <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone } from "lucide-react"

export default function Staff() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".staff-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const staffMembers = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Clinical Director & Child Psychologist",
      specialization: "Child Development & Behavioral Therapy",
      image: "/staff-dr-sarah-mitchell.jpg",
      email: "sarah@childworld.com",
      phone: "(555) 123-4567",
    },
    {
      name: "Dr. James Chen",
      title: "Senior Therapist",
      specialization: "Adolescent Mental Health & Trauma",
      image: "/staff-dr-james-chen.jpg",
      email: "james@childworld.com",
      phone: "(555) 123-4568",
    },
    {
      name: "Emily Rodriguez",
      title: "Licensed Counselor",
      specialization: "Family Therapy & Parenting Support",
      image: "/staff-emily-rodriguez.jpg",
      email: "emily@childworld.com",
      phone: "(555) 123-4569",
    },
    {
      name: "Michael Thompson",
      title: "Art & Play Therapist",
      specialization: "Creative Therapy & Emotional Expression",
      image: "/staff-michael-thompson.jpg",
      email: "michael@childworld.com",
      phone: "(555) 123-4570",
    },
    {
      name: "Dr. Lisa Wong",
      title: "Psychiatrist",
      specialization: "Medication Management & Psychiatric Care",
      image: "/staff-dr-lisa-wong.jpg",
      email: "lisa@childworld.com",
      phone: "(555) 123-4571",
    },
    {
      name: "Jessica Martinez",
      title: "Clinical Coordinator",
      specialization: "Patient Care & Scheduling",
      image: "/staff-jessica-martinez.jpg",
      email: "jessica@childworld.com",
      phone: "(555) 123-4572",
    },
  ]

  return (
    <section
      id="staff"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-40 right-20 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="absolute bottom-20 left-10 w-36 h-36 bg-accent/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our dedicated team of experienced professionals is committed to providing compassionate, expert care for
            every child and family we serve.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="staff-card bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/15 to-accent/15 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{member.title}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.specialization}</p>

                {/* Contact Info */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

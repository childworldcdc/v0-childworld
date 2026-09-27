"use client"

import { useEffect, useRef } from "react"

type GalleryItem = {
  src: string
  height: string
  type: "image" | "video"
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".gallery-col", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const columns: GalleryItem[][] = [
    [
      {
        src: "/IMG-20260909-WA0025.jpg.jpeg",
        height: "h-64 md:h-96",
        type: "image",
      },
      {
        src: "/IMG-20260909-WA0023.jpg.jpeg",
        height: "h-64",
        type: "image",
      },
      {
        src: "/VID-20260909-WA0028.mp4",
        height: "h-80",
        type: "video",
      },
    ],
    [
      {
        src: "/IMG-20260909-WA0021.jpg.jpeg",
        height: "h-80",
        type: "image",
      },
      {
        src: "/VID-20260909-WA0027.mp4",
        height: "h-64 md:h-96",
        type: "video",
      },
      {
        src: "/IMG-20260909-WA0020.jpg.jpeg",
        height: "h-64",
        type: "image",
      },
    ],
    [
      {
        src: "/VID-20260909-WA0026.mp4",
        height: "h-64",
        type: "video",
      },
      {
        src: "/IMG-20260909-WA0019.jpg.jpeg",
        height: "h-80",
        type: "image",
      },
      {
        src: "/IMG-20260909-WA0018.jpg.jpeg",
        height: "h-64 md:h-96",
        type: "image",
      },
    ],
    [
      {
        src: "/VID-20260909-WA0022.mp4",
        height: "h-64 md:h-96",
        type: "video",
      },
      {
        src: "/IMG-20260909-WA0017.jpg.jpeg",
        height: "h-80",
        type: "image",
      },
      {
        src: "/IMG-20260909-WA0016.jpg.jpeg",
        height: "h-64",
        type: "image",
      },
    ],
  ]

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div
        className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute bottom-40 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0.2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Our Gallery
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Moments of Joy
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mb-6" />

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Step into our world of learning and growth through these captured
            moments. Each image tells a story of progress, joy, and the special
            connections formed during our daily activities and therapy sessions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="gallery-col flex flex-col gap-4"
            >
              {column.map((item, imgIndex) => (
                <div
                  key={`${item.src}-${imgIndex}`}
                  className={`relative group overflow-hidden rounded-2xl ${item.height} w-full`}
                >
                  {item.type === "video" ? (
                    <video
                      className="w-full h-full object-cover"
                      src={item.src}
                      controls
                      muted
                      playsInline
                      loop
                      preload="metadata"
                    />
                  ) : (
                    <img
                      className="w-full h-full object-cover"
                      src={item.src}
                      alt={`Gallery moment ${
                        colIndex * 3 + imgIndex + 1
                      }`}
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

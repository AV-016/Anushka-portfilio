"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Soil Health Analyzer",
      category: "iot",
      description:
        "IoT-based system for monitoring soil pH, moisture, and temperature using ESP32, aimed at improving agricultural productivity.",
      tech: ["ESP32", "IoT", "Sensors", "Python"],
      impact: "Real-time soil monitoring for sustainable farming",
      links: {
        github: "https://github.com/AV-016/SoilHealthAnalyzer",
        demo: "https://example.com",
      },
    },
    {
      id: 2,
      title: "Nyayavaani",
      category: "ai",
      description:
        "Legal assistance chatbot simplifying legal communication through natural language processing. Visit nyayavaani.in.net to explore.",
      tech: ["NLP", "Python", "FastAPI", "Transformers"],
      impact: "Making legal assistance accessible to all",
      links: {
        github: "https://github.com/Aryan-sriii/bhashini",
        website: "https://nyayavaani.in.net",
      },
    },
    {
      id: 3,
      title: "Satyavaani",
      category: "ai",
      description:
        "AI-powered smart assistant service for colleges and schools, helping students with academic queries and information.",
      tech: ["AI", "Python", "NLP", "Web"],
      impact: "Supporting 1000+ students with academic assistance",
      links: {
        github: "https://github.com",
        demo: "https://example.com",
      },
    },
    {
      id: 4,
      title: "Network Data Simulator",
      category: "research",
      description: "Simulation tool for testing network performance and efficient data division across nodes.",
      tech: ["Python", "Networking", "Simulation"],
      impact: "Optimized network performance analysis",
      links: {
        github: "https://github.com/AV-016/dynamic_spectrum_allocation",
      },
    },
    {
      id: 5,
      title: "UniPay",
      category: "blockchain",
      description: "DApp enabling conversion between fiat currency and NFTs for secure cross-border transactions.",
      tech: ["Blockchain", "Web3", "Smart Contracts", "NFTs"],
      impact: "Secure decentralized transaction system",
      links: {
        github: "https://github.com",
        demo: "https://example.com",
      },
    },
  ]

  const categories = ["all", "iot", "ai", "research", "blockchain"]
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 ink-animation">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="quill-underline">Tech Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground italic">Building solutions that matter</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${
                filter === cat
                  ? "bg-primary text-primary-foreground neon-glow"
                  : "bg-muted/50 text-foreground hover:bg-muted/80 vintage-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="parchment-card p-6 hover:border-primary transition-all duration-300 group tech-accent hover:shadow-xl"
            >
              <div className="h-40 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 mb-4 flex items-center justify-center border border-border/30">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm font-serif">Project Preview</p>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-secondary mb-2">Impact</p>
                <p className="text-sm text-muted-foreground">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-muted/50 hover:bg-muted rounded-lg transition-colors text-sm font-semibold vintage-border"
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors text-sm font-semibold neon-glow"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg transition-colors text-sm font-semibold"
                  >
                    <ExternalLink size={16} />
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

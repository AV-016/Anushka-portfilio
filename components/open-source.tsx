"use client"

import { Github, Star, GitFork } from "lucide-react"

export default function OpenSource() {
  const repos = [
    {
      name: "awesome-knowledge-graphs",
      description: "Curated collection of resources for knowledge graph research and applications",
      stars: 342,
      forks: 89,
    },
    {
      name: "multilingual-nlp-toolkit",
      description: "Open-source toolkit for building multilingual NLP applications",
      stars: 256,
      forks: 64,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Open Source</h2>
          <p className="text-lg text-muted-foreground">I ship in public — GSoC, open-source, and beyond</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {repos.map((repo, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Github className="text-primary" size={24} />
                  <h3 className="font-semibold text-foreground">{repo.name}</h3>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">{repo.description}</p>

              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-secondary" />
                  <span className="text-sm font-semibold text-foreground">{repo.stars}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitFork size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground">{repo.forks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

// components/projects.tsx
"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  impact: string;
  links: {
    github?: string;
    demo?: string;
    website?: string;
  };
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PeerDeck",
    category: "web",
    description:
      "A platform connecting students with real-world projects, courses, and opportunities. Features leaderboards, AI content filtering, and global collaboration.",
    tech: ["React", "Node.js", "MERN", "AI"],
    impact: "420+ upvotes, 37% weekly growth, 650+ projects posted",
    links: {
      website: "https://peerdeck.com",
      github: "https://github.com/AV-016/peerdeck",
    },
    image: "/projects/peerdeck.png",
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
    image: "/projects/nyayavaani.png",
  },
];

const categories = ["all", "web", "ai"] as const;

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tech Projects
          </h2>
          <p className="text-lg text-muted-foreground italic">Building solutions that matter</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg font-semibold capitalize transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted/50 text-foreground hover:bg-muted/80 border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 border border-border/30">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <p className="text-sm text-muted-foreground font-serif">Preview</p>
                  </div>
                )}
              </div>

              <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider">Impact</p>
                <p className="text-sm text-muted-foreground">{project.impact}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-muted/50 hover:bg-muted rounded-lg text-sm font-semibold border border-border"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
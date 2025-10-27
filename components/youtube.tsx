"use client"

import { Youtube, Users, Eye } from "lucide-react"

export default function YouTube() {
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Building a Multilingual Chatbot",
      views: "12K",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "GSoC Experience & Tips",
      views: "8.5K",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Knowledge Graphs Explained",
      views: "15K",
    },
  ]

  return (
    <section id="youtube" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Watch Me Simplify Tech</h2>
          <p className="text-lg text-muted-foreground">Latest videos on tech, research, and student life</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card rounded-xl p-6 border border-border flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
              <Users className="text-secondary" size={24} />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Subscribers</p>
              <p className="font-serif text-3xl font-bold text-foreground">1.2K</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Eye className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Total Views</p>
              <p className="font-serif text-3xl font-bold text-foreground">45K</p>
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-48 rounded-xl overflow-hidden bg-muted mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <Youtube size={48} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground">{video.views} views</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            <Youtube size={20} />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}

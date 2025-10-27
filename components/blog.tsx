"use client"

import { ArrowRight } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      title: "How I Built a Multilingual Chatbot in 7 Days",
      excerpt: "A deep dive into building a production-ready chatbot using transformers and FastAPI.",
      date: "Oct 15, 2024",
      readTime: "8 min read",
    },
    {
      title: "Why Every Student Should Start YouTube",
      excerpt: "Lessons learned from launching a tech channel and building a community from scratch.",
      date: "Oct 8, 2024",
      readTime: "6 min read",
    },
    {
      title: "Open Source Contributions: My Journey",
      excerpt: "How I started contributing to open source and the lessons I learned along the way.",
      date: "Sep 28, 2024",
      readTime: "7 min read",
    },
    {
      title: "Building Scalable Web Applications",
      excerpt: "Best practices and patterns for building web applications that scale with your users.",
      date: "Sep 20, 2024",
      readTime: "10 min read",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5 relative overflow-hidden">
      <div className="absolute top-0 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 ink-animation">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="quill-underline">Articles & Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground italic">Thoughts on tech, research, and growth</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="parchment-card p-6 hover:border-primary transition-all duration-300 group cursor-pointer tech-accent hover:shadow-xl"
            >
              <div className="mb-4">
                <p className="text-sm text-muted-foreground font-serif">
                  {post.date} • {post.readTime}
                </p>
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{post.excerpt}</p>

              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Read More
                <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://hashnode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold vintage-border hover:shadow-lg"
          >
            Read More on Hashnode
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

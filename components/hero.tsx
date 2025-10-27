"use client"

import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ink-animation">
            <div className="space-y-2">
              <p className="text-secondary font-semibold text-sm tracking-widest uppercase">Welcome to my universe</p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
                <span className="quill-underline">Anushka Vajpayee</span>
              </h1>
              <p className="text-lg text-accent font-serif italic">"Boldness be my friend"</p>
              <p className="text-xl text-muted-foreground font-serif italic">
                Tech Enthusiast | Open-Source Contributor | F1 & Cars Enthusiast
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Second-year CS student at Chandigarh University. Passionate about technology, open-source development, and
              building innovative solutions that make a real impact. When I'm not coding, you'll find me exploring the
              world of Formula 1 and automotive engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold neon-glow hover:shadow-xl"
              >
                <Play size={20} />
                Explore My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold vintage-border"
              >
                Get In Touch
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden parchment-card tech-accent">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <Play size={64} className="mx-auto text-primary/40 mb-4" />
                <p className="text-muted-foreground font-serif">Your Photo Here</p>
                <p className="text-sm text-muted-foreground mt-2">Add your profile image or intro video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

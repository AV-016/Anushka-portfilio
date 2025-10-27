"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-40 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 ink-animation">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="quill-underline">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground italic">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed font-serif">
              I'm a passionate second-year Computer Science student at Chandigarh University with a deep interest in
              technology and innovation. I love exploring new technologies, contributing to open-source projects, and
              building solutions that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-serif">
              When I'm not coding, you can find me learning new skills, collaborating with fellow developers, or working
              on projects that push my boundaries. I believe in continuous learning and sharing knowledge with the
              community.
            </p>
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-foreground">Skills & Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Open Source",
                  "Problem Solving",
                  "Collaboration",
                  "Learning",
                  "IoT",
                  "AI/ML",
                  "Blockchain",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="parchment-card p-8 tech-accent">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Quick Facts</h3>
            <div className="space-y-4">
              {[
                { label: "Education", value: "Second Year, Chandigarh University" },
                { label: "Focus", value: "Web Development & Open Source" },
                { label: "Passion", value: "Formula 1 & Automotive Tech" },
                { label: "Goal", value: "Build impactful tech solutions" },
              ].map((fact, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-border/30 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground font-serif">{fact.label}</p>
                    <p className="text-muted-foreground text-sm">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

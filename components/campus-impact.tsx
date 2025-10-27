"use client"

export default function CampusImpact() {
  const impacts = [
    {
      title: "Founded Tech Club",
      description:
        "Started a thriving community of 150+ students passionate about emerging technologies and innovation.",
    },
    {
      title: "Organized Ideathons",
      description: "Organized multiple ideathons with 200+ participants, fostering innovation and collaboration.",
    },
    {
      title: "Mentored Juniors",
      description: "Guided 20+ junior students in app development, research, and career growth.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Beyond Code</h2>
          <p className="text-lg text-muted-foreground">Campus impact and community building</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-8 hover:border-primary transition-colors text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-2xl font-bold text-primary">{index + 1}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{impact.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

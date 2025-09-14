import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-2 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
            About Me
          </h2>
          <Card className="animate-fade-in-up  bg-white/80 dark:bg-gray-800/80 shadow-md">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                I'm a passionate full stack developer with a creative approach
                to problem-solving. With expertise in modern web technologies, I
                specialize in building scalable applications that deliver
                exceptional user experiences. My journey in development has been
                driven by curiosity and a constant desire to learn and implement
                cutting-edge solutions.
              </p>
              <br />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

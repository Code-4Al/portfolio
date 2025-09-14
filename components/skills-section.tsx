import { Badge } from "@/components/ui/badge"
import { Code2, Database, Globe,Server, GitBranch, Palette } from "lucide-react"

const skills = [
  { name: 'React', icon: Code2, category: 'Frontend' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'Next.js', icon: Globe, category: 'Frontend' },
  { name: 'TypeScript', icon: Code2, category: 'Language' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'MongoDB', icon: Database, category: 'Database' },
  { name: 'Git', icon: GitBranch, category: 'Tools' },
  { name: 'UI/UX Design', icon: Palette, category: 'Design' },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Badge
                    variant="secondary"
                    className="w-full h-20 flex flex-col items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group-hover:scale-105"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs font-medium">{skill.name}</span>
                  </Badge>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

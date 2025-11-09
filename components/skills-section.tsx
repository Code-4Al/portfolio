import { Badge } from "@/components/ui/badge"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPrisma,
  SiRedux,
  SiJavascript
} from 'react-icons/si'
import { Palette } from 'lucide-react'


const skills = [
  { name: 'HTML5', icon: SiHtml5, category: 'Frontend' },
  { name: 'CSS3', icon: SiCss3, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Language' },
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'Redux', icon: SiRedux, category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Prisma', icon: SiPrisma, category: 'Backend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Language' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  { name: 'Git', icon: SiGit, category: 'Tools' },
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

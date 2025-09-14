import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: 'Socially',
    description: `A full-stack social media platform where users can create, edit, delete, comment and share posts with ease.Includes features like likes, profile management, and seamless content sharing for an engaging experience.`,
    image: '/Socially.png',
    github: 'https://github.com/Code-4Al/socialproject',
    live: 'https://socialproject-pied.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Flowmazon',
    description: `Developed a full-stack E-Cart web app with Next.js, Prisma, and PostgreSQL, featuring JWT-based authentication and real-time cart updates.  
      Implemented server actions with Next.js App Router and built a responsive UI using Tailwind CSS for seamless cross-device experience.`,
    image: '/e-commerce-web.png',
    github: 'https://github.com/Code-4Al/nextjs-ecommerce-web',
    live: 'https://nextjsecommerceweb.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'MongoDB'],
  },
  {
    title: ' Jobs Portal',
    description: `Built a full-stack Job Portal application where users can search jobs by location, type, title, or company.  
    Implemented job posting with admin approval workflow to ensure validated listings on the platform.`,
    image: '/job.png',
    github: 'https://github.com/Code-4Al/nextjs-job-board-0-Starting-Point',
    live: 'https://nextjs-job-board-phi-taupe.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Blog App',
    description:`Developed a full-stack Blog application with user authentication, enabling users to create, edit, and delete posts.  
    Integrated commenting functionality to foster interaction and engagement within the platform.`,
    image: '/blog.png',
    github: 'https://github.com/Code-4Al/blog-web',
    live: 'https://github.com/Code-4Al/blog-web',
    tech: ['Node.js', 'Express', 'React', 'MongoDB'],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-5 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-xs">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

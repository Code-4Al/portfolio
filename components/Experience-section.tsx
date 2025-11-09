import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'


const experiences = [
  {
    title: 'Cloud Intern',
    date: '1 May 2025 – 30 May 2025 (1 Month)',
    description: `
I completed an intensive on-site internship at Gleamator Technologies LLP, conducted under the AWS Academy Cloud Foundations & Solutions Architect Associate program.
 This internship gave me hands-on experience in core AWS cloud services and real-world cloud infrastructure setups.
Key Responsibilities & Learnings:
Created and managed EC2 instances, explored IAM for user roles, permissions, and multi-factor authentication (MFA).
Worked with S3 buckets for object storage, applied lifecycle policies, and used CloudWatch for monitoring.
Learned about cloud computing models like laaS, PaaS, SaaS, and concepts in serverless architecture.
Gained exposure to VPC networking, Route 53 DNS management, and AWS security best practices.
This internship enhanced my technical proficiency in cloud environments and gave me practical experience with tools widely used in the industry. 
It also prepared me to understand and architect real-time solutions in the cloud ecosystem.`,
    image: '/ex-logo.jpg',
    tech: ['EC2', 'S3', 'IAM','EBS','RDS','CloudFront'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiences" className="py-5 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <Card
                key={experience.title}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={experience.image || '/placeholder.svg'}
                    alt={experience.title}
                    className="w-full h-48  object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{experience.title}</CardTitle>
                  <CardDescription className="text-xs text-justify">
                    {experience.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mb-2">
                    {experience.date}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
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

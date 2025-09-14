'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { createMessage } from '@/lib/actions'
import { toast } from 'sonner'
import { useRef } from 'react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shashmithpcmc@gmail.com',
    href: 'mailto:shashmith@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7406040655',
    href: 'tel:+15551234567',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shashmith-s/',
    href: 'https://www.linkedin.com/in/shashmith-s/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Code-4Al',
    href: 'https://github.com/Code-4Al',
  },
]

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    try {
      await createMessage(formData)
      toast.success('✅ Message submitted successfully!')
      formRef.current?.reset()
    } catch (error) {
      toast.error('❌ Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Let's Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-justify">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>
                <div className="space-y-4">
                  {contactInfo.map((contact) => {
                    const Icon = contact.icon
                    return (
                      <Button
                        key={contact.label}
                        variant="ghost"
                        className="w-full justify-start h-auto p-4"
                        asChild
                      >
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="w-5 h-5 mr-3 text-primary" />
                          <div className="text-left">
                            <div className="font-medium">{contact.label}</div>
                            <div className="text-sm text-muted-foreground">
                              {contact.value}
                            </div>
                          </div>
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
            {/* ✅ Quick Message Card with Form */}
            <Card
              className="animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <CardHeader>
                <CardTitle>Quick Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} action={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    required
                    className="py-5 sp"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    className="py-5"
                  />
                  <Textarea
                    name="message"
                    placeholder="Enter Your Message"
                    required
                  />

                  <Button className="w-full" size="lg" type="submit">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

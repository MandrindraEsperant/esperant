"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Platforme de téleconsultation ",
      description: "Plateforme permettant aux patients et médecins de réaliser des consultations médicales à distance de manière sécurisée.",
      image: "/chu.png",
      technologies: ["Next.js", "TypeScript", "Express", "PostgreSQL","Prisma","Socket.io","SimplePeer","JWT"],
      liveUrl: null, // Disabled live URL for non-portfolio projects
      githubUrl: "https://github.com/MandrindraEsperant/chu_teleconsultation.git",
    },
    {
      title: "CRM",
      description: "Un CRM est une application qui centralise les informations et interactions clients pour optimiser la gestion commerciale, le marketing et la relation client",
      image: "/crm.png",
      technologies: ["Next.js","Tailwind CSS", "FastAPI", "PostgreSQL"],
      liveUrl: null, // Disabled live URL for non-portfolio projects
      githubUrl: "https://github.com/sarobidy-dev/CRM_Stage.git",
    },
    {
      title: "Portfolio Website",
      description: "Site portfolio moderne et responsive avec animations fluides.",
      image: "/porfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://esperant-porfolio.vercel.app/", // Enabled live URL only for portfolio project
      githubUrl: "https://github.com/MandrindraEsperant/esperant",
    },
    {
      title: "Suivi des expédition",
      description: "Application permettant de suivre en temps réel l’état et la localisation des expéditions.",
      image: "/primex.jpeg",
      technologies: ["Node.js", "Express", "React", "MySQL","Tailwind CSS","JWT"],
      liveUrl: null, // Disabled live URL for non-portfolio projects
      githubUrl: "https://github.com/MandrindraEsperant/primex.git",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-montserrat text-foreground mb-4">
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t("projects.view")}
                      </a>
                    </Button>
                  )}
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t("projects.code")}
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold font-montserrat">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

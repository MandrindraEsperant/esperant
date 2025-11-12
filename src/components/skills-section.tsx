"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import {
  Server,
  Monitor,
  Smartphone,
  Database,
  BarChart3,
  Settings,
  Zap,
  Cat,
  Target,
  Leaf,
  Atom,
  Triangle,
  Palette,
  Hash,
  Phone,
  FileSpreadsheet,
  Microscope,
  GitBranch,
  Wrench,
  Package,
  Rocket,
  Container,
} from "lucide-react"

export function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.backend"),
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Express", icon: <Zap className="w-5 h-5" /> },
        { name: "NestJS", icon: <Cat className="w-5 h-5" /> },
        { name: "FastAPI", icon: <Zap className="w-5 h-5" /> },
        { name: "Laravel", icon: <Target className="w-5 h-5" /> },
        { name: "SpringBoot", icon: <Leaf className="w-5 h-5" /> },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("skills.frontend"),
      icon: <Monitor className="w-8 h-8" />,
      skills: [
        { name: "React", icon: <Atom className="w-5 h-5" /> },
        { name: "Next.js", icon: <Triangle className="w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <Palette className="w-5 h-5" /> },
        { name: "Bootstrap", icon: <Hash className="w-5 h-5" /> },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [{ name: "React Native", icon: <Phone className="w-5 h-5" /> }],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t("skills.database"),
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Leaf className="w-5 h-5" /> },
        { name: "MySQL", icon: <Database className="w-5 h-5" /> },
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: t("skills.data"),
      icon: <BarChart3 className="w-8 h-8" />,
      skills: [
        { name: "Python", icon: <Zap className="w-5 h-5" /> },
        { name: "Excel", icon: <FileSpreadsheet className="w-5 h-5" /> },
        { name: "KNIME", icon: <Microscope className="w-5 h-5" /> },
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "DevOps",
      icon: <Settings className="w-8 h-8" />,
      skills: [
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "Jenkins", icon: <Wrench className="w-5 h-5" /> },
        { name: "Nexus", icon: <Package className="w-5 h-5" /> },
        { name: "GitHub Actions", icon: <Rocket className="w-5 h-5" /> },
        { name: "Docker", icon: <Container className="w-5 h-5" /> },
      ],
      color: "from-teal-500 to-blue-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-montserrat text-foreground mb-4">{t("skills.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-border hover:shadow-lg transition-all duration-300 group h-full">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold font-montserrat">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                      >
                        <span className="flex-shrink-0 text-primary">{skill.icon}</span>
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

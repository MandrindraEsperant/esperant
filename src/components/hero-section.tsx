"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Facebook, Download, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mt-20 md:mt-0 lg:text-left "
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-4"
            >
              {t("hero.greeting")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif text-foreground mb-4"
            >
              {t("hero.name")}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-8"
            >
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/CV_Mandrindra_Espérant.pdf';
                  link.download = 'Mandrindra_RANDRIAMAHASOA_CV.pdf';
                  link.click();
                }}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                {t("hero.download")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { href: "https://github.com/MandrindraEsperant", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/mandrindra-esp%C3%A9rant-randriamahasoa-55129428b/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.facebook.com/mandrindraesperant.randriamahasoa", icon: Facebook, label: "Facebook" },
              ].map(({ href, icon: Icon, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-200 transform hover:scale-105 bg-muted/50 hover:bg-primary/10 px-3 py-2 rounded-lg"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/10 to-transparent"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/homme1.png"
                    alt="Mandrindra Espérant - Développeur Full Stack"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </motion.div>

                {[
                  { text: "React", position: "top-0 right-0", delay: 1 },
                  { text: "Node.js", position: "bottom-0 left-0", delay: 1.2 },
                  { text: "TypeScript", position: "top-1/2 -right-4", delay: 1.4 },
                ].map(({ text, position, delay }) => (
                  <motion.div
                    key={text}
                    className={`absolute ${position} bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


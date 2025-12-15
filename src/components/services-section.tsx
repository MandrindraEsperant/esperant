"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Server, Users, CloudCog } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ServicesSection() {
  const { t } = useLanguage()

  // const services = [
  //   {
  //     icon: Code,
  //     title: t("services.web.title"),
  //     description: t("services.web.description"),
  //   },
  //   {
  //     icon: Smartphone,
  //     title: t("services.mobile.title"),
  //     description: t("services.mobile.description"),
  //   },
  //   {
  //     icon: Server,
  //     title: t("services.backend.title"),
  //     description: t("services.backend.description"),
  //   },
  //   {
  //     icon: Users,
  //     title: t("services.consulting.title"),
  //     description: t("services.consulting.description"),
  //   },
  // ]

const services = [
  {
    icon: Code,
    title: t("services.web.title"),
    description: t("services.web.description"),
  },
  {
    icon: Smartphone,
    title: t("services.mobile.title"),
    description: t("services.mobile.description"),
  },
  {
    icon: Server,
    title: t("services.backend.title"),
    description: t("services.backend.description"),
  },
  {
    icon: CloudCog,
    title: t("services.devops.title"),
    description: t("services.devops.description"),
  },
  {
    icon: Users,
    title: t("services.consulting.title"),
    description: t("services.consulting.description"),
  },
];


  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-montserrat text-foreground mb-4">
            {t("services.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/50"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold font-montserrat">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

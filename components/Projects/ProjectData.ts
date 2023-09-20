import { ProjectModel } from "../../models/ProjectModel";

export const projectData: ProjectModel[] = [
  {
    name: "Portfolio",
    desc: "Ein kleine Präsenz im Internet",
    year: 2022,
    href: "",
    background: "bg-[url(/images/portfolio.jpg)]",
    technologies: ["React.JS", "Next.Js", "Tailwind", "Cypress"],
  },
  {
    name: "Home2Home",
    desc: "Homepage für eine Umzugsfirma",
    year: 2023,
    href: "http://dev.ladam.de",
    background: "bg-[url(/images/home2home.jpg)]",
    technologies: ["Vue 3", "GoogleApi", "Docker"],
  },
  {
    name: "MoCo",
    desc: "Website zur Verwaltung von Monatlichen Kosten (wip)",
    year: 2023,
    href: "",
    background: "bg-[url(/images/moco.jpg)]",
    technologies: ["Nuxt.Js", "C#", ".Net", "Entity-Framwork"],
  },
  {
    name: "Test Projekt für Interview",
    desc: "Restful-Web-Api mit Keycloak",
    year: 2023,
    href: "https://spring.boehnern.de/swagger-ui/index.html",
    background: "bg-[url(/images/test.jpg)]",
    technologies: ["Java", "Spring Boot", "Keycloak", "Docker"],
  },
];

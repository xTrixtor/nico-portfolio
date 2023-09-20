import { CurriculumModel } from "../../models/CurriculumModel";

export const CurriculumData: CurriculumModel[] = [
  {
    title: "Software Developer",
    company: "Saatmann GmbH",
    companyHref: "https://www.saatmann.de",
    from: "01.2023",
    until: renderUntilIcon(),
    skills: ["C#", ".Net", "Vue", "Nuxt.Js", "TypeScript", "Swagger","TFS"],
  },
  {
    title: "Frontend Developer - Minijob",
    company: "Kerberry",
    companyHref: "https://www.kerberry.de",
    from: "05.2022",
    until: renderUntilIcon("08.2023"),
    skills: ["React.JS", "Next.JS", "Tailwind", "Cypress", "TypeScript","GitLab"],
  },
  {
    title: "Software Developer",
    company: "Knoell GmbH",
    companyHref: "https://www.knoell.com",
    from: "10.2021",
    until: renderUntilIcon("12.2022"),
    skills: [
      "C#",
      ".Net",
      "Blazor",
      "Java",
      "Nuclos",
      "PostgresSQL",
      "DevExpress",
    ],
  },
  {
    title: "Ausbildung",
    company: "TectiQom",
    companyHref: "https://tectiqom.de",
    from: "09.2018",
    until: renderUntilIcon("10.2021"),
    skills: ["C#", ".Net/ ASP.Net.Core", "HTML,CSS, Bootstrap", "TDD", "MVC, MVVM"],
  },
];

function renderUntilIcon(until?: string): JSX.Element {
  if (until != null) return <>{until}</>;
  else {
    return <img src="/loading.svg" className="w-8 ml-1" />;
  }
}

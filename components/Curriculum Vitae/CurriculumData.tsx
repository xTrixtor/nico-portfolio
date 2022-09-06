import { CurriculumModel } from "../../models/CurriculumModel";

export const CurriculumData: CurriculumModel[] = [
  {
    title: "Frontend Developer",
    company: "Kerberry",
    companyHref: "https://www.kerberry.de",
    from: "05.2022",
    until: renderUntilIcon(),
    skills: ["React", "Next.JS", "Tailwind", "Cypress", "TypeScript"],
  },
  {
    title: "Software Developer",
    company: "Knoell GmbH",
    companyHref: "https://www.knoell.com",
    from: "10.2021",
    until: renderUntilIcon(),
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
    skills: ["C#", ".Net", "HTML", "CSS", "Bootstrap", "TDD", "MVC","MVVM"],
  },
];

function renderUntilIcon(until?: string): JSX.Element {
  if (until != null) return <>{until}</>;
  else {
    return <img src="/loading.svg" className="w-8 ml-1" />;
  }
}

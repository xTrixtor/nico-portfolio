import {ProjectModel} from "../../models/ProjectModel";

export const projectData:ProjectModel[] = [

    {
        name:"TextBlock Leitfaden",
        desc:"Dynamisches zusammensetzen eines Leitfadens anhand von Parameter",
        year:2020,
        background:"bg-block",
        technologies:["Java","Nuclos","PostgresSQL","C#",".Net"],
        finished:true
    },
    {
        name:"Urlaubsportal",
        desc:"Verwaltung der Urlaube mit einem Click",
        year:2021,
        background:"bg-vacation",
        technologies:[".Net","C#","Dapper","SQL", "Stored-Procedure", "Views"],
        finished:true
    },
    {
        name:"Project Name 1",
        desc:"Web-Applkation zur Veranschaulichung von Daten",
        year:2022,
        background:"bg-statistic",
        technologies:[".Net","C#","Blazor","DevExpress","Bootstrap"],
        finished:true
    },
    {
        name:"Portfolio",
        desc:"Ein kleine Präsenz im Internet",
        year:2022,
        background:"bg-portfolio",
        technologies:["React.JS","Next.Js","Tailwind","Cypress"],
        finished:true
    },
]

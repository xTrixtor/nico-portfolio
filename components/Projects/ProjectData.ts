import {ProjectModel} from "../../models/ProjectModel";

export const projectData:ProjectModel[] = [
    {
        name:"Project Name 1",
        desc:"Web-Applkation zur Veranschaulichung von Daten",
        year:2022,
        technologies:[".Net","C#","Blazor","DevExpress","Bootstrap"],
        tailWindConfig:"tablet:flex-row flex-col"

    },
    {
        name:"Project Name 2",
        desc:"Hier steht eine Beschreibung des Projektes",
        year:2022,
        technologies:["Java","Nuclos","PostgresSQL","C#",".Net"],
        tailWindConfig:"tablet:flex-row-reverse flex-col"
    },
    {
        name:"Urlaubstool",
        desc:"Urlaub",
        year:2018,
        technologies:[".Net","C#","Dapper","SQL", "Stored-Procedure", "Views"],
        tailWindConfig:"tablet:flex-row flex-col"
    },
    {
        name:"Portfolio",
        desc:"",
        year:2022,
        technologies:["React.JS","Next.Js","Tailwind","Cypress"],
        tailWindConfig:"tablet:flex-row-reverse flex-col"
    },
]

import React from "react";
import {ProjectModel} from "../../models/ProjectModel";

export default function ProjectCard(project: ProjectModel):JSX.Element{
    const {background, year, name, desc, technologies, href} = project;
    return(
            <div className={"w-full h-full flex justify-center items-center"}>
                <a href={href} className={"cursor-pointer h-full w-[90%] flex flex-col items-center justify-center rounded-lg duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand"}>
                    <div className={"w-full h-full flex bg-cover bg-center object-cover rounded-lg border-2 !border-brand " + background}>
                        <div className={"w-full h-full flex justify-center flex-col items-center bg-slate-900/50"}>
                            <div className={"text-white text-xl font-semibold py-3"}>
                                <div className={"w-20 h-20 rounded-full bg-brand flex justify-center items-center border-4 border-white"}>
                                    {year}
                                </div>
                            </div>
                            <div className={"text-white tablet:text-xl text-base font-semibold py-3"}>
                                {name}
                            </div>
                            <div className={"text-white tablet:text-xl text-sm font-semibold py-3 px-3 text-center"}>
                                {desc}
                            </div>
                            <div>
                                <div className={"tablet:text-xl text-base text-brand font-semibold text-center"}>Genutzte Technologien:</div>
                                <div className={"grid grid-cols-2"}>
                                    {technologies.map((technology:string, key:number):JSX.Element =>{
                                        return(
                                            <div className={"flex justify-start items-center grow"} key={key}>
                                                <div className={"text-white font-semibold py-1 tablet:text-xl text-sm grow text-center"}>{technology}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
    )
}

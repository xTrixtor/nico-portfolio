import Counter from "../Count";
import React from "react";
import {ProjectModel} from "../../models/ProjectModel";

export default function ProjectCard(project: ProjectModel):JSX.Element{
    const {background, year, name, desc, technologies} = project;
    return(
            <div className={"w-full h-full flex justify-center items-center" +
                ""}>
                <div className={"h-full w-[90%] flex flex-col items-center justify-center bg-slate-300/[.2] rounded-lg p-2"}>
                    <div className={`w-full h-full flex bg-cover bg-center object-cover ${background} rounded-lg border-2 border-brand`}>
                        <div className={"w-full h-full flex justify-center flex-col items-center"}>
                            <div className={"text-white text-xl font-semibold py-3"}>
                                <div className={"w-20 h-20 rounded-full bg-brand/[.8] flex justify-center items-center border-4"}>
                                    <Counter endCount={`${year}`} duration={"3"}/>
                                </div>
                            </div>
                            <div className={"text-white tablet:text-xl text-base font-semibold py-3"}>
                                {name}
                            </div>
                            <div className={"text-white tablet:text-xl text-sm font-semibold py-3 px-3 text-center"}>
                                {desc}
                            </div>
                            <div className={""}>
                                <div className={"tablet:text-xl text-base text-brand font-semibold"}>Genutzte Technologien:</div>
                                {technologies.map((technology:string):JSX.Element =>{
                                    return(
                                        <div className={"flex justify-start items-center grow"}>
                                            <div className={"text-white font-semibold py-1 tablet:text-xl text-sm grow text-center"}>{technology}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
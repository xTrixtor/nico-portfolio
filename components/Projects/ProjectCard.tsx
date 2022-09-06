import Counter from "../../public/images";
import React from "react";
import {ProjectModel} from "../../models/ProjectModel";

export default function ProjectCard(project: ProjectModel):JSX.Element{
    const {background, year, name, desc, technologies,visible,animation} = project;
    function IsMobil(): boolean {
        if (typeof window !== "undefined") {
            const windowWidth = window.innerWidth;
            return windowWidth < 991;
        }
        return false;
    }
    return(
            <div className={IsMobil()?"w-full h-full flex justify-center items-center":`w-full h-full flex justify-center items-center ${visible?`${animation}`:""}`}>
                <div className={"h-full w-[90%] flex flex-col items-center justify-center bg-slate-300/[.2] rounded-lg p-2"}>
                    <div className={`w-full h-full flex bg-cover bg-center object-cover ${background} rounded-lg border-2 border-brand`}>
                        <div className={"w-full h-full flex justify-center flex-col items-center"}>
                            <div className={"text-white text-xl font-semibold py-3"}>
                                <div className={"w-20 h-20 rounded-full bg-brand/[.8] flex justify-center items-center border-4 border-white"}>
                                    <Counter endCount={`${year}`} duration={"3"} visible={visible}/>
                                </div>
                            </div>
                            <div className={"text-white tablet:text-xl text-base font-semibold py-3"}>
                                {name}
                            </div>
                            <div className={"text-white tablet:text-xl text-sm font-semibold py-3 px-3 text-center"}>
                                {desc}
                            </div>
                            <div className={""}>
                                <div className={"tablet:text-xl text-base text-brand font-semibold text-center"}>Genutzte Technologien:</div>
                                <div className={"grid grid-cols-2"}>
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
            </div>
    )
}
import Section from "../Section";
import {ProjectModel} from "../../models/ProjectModel";
import {projectData} from "./ProjectData";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <Section id={"projects"} title={"Projekte"}>
            <div className={"w-full h-full flex flex-col justify-center items-center mt-5"}>
                <div className={`grid tablet:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-3 w-full items-center justify-center`}>
                    {projectData.map((project:ProjectModel, key:number):JSX.Element => {
                        const {name, desc, year, href, background, technologies} = project
                        return(
                            <ProjectCard key={key} href={href} name={name} desc={desc} year={year} background={background} technologies={technologies} />
                        )
                    })}
                </div>
            </div>

        </Section>
    )
}
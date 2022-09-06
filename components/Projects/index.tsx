import Section from "../Section";
import {ProjectModel} from "../../models/ProjectModel";
import {projectData} from "./ProjectData";
import React from "react";
import Counter from "../Count";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <Section id={"projects"} title={"Projects"}>
            <div className={"w-full h-full flex flex-col justify-center items-center"}>
                <div className={"grid tablet:grid-cols-2 grid-cols-1 gap-3 w-full flex items-center justify-center"}>
                    {projectData.map((project:ProjectModel):JSX.Element => {
                        const {name, desc, year, background, technologies} = project
                        return(
                            <ProjectCard name={name} desc={desc} year={year} background={background} technologies={technologies} />
                        )
                    })}
                </div>
            </div>

        </Section>
    )
}
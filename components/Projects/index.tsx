import Section from "../Section";
import {ProjectModel} from "../../models/ProjectModel";
import {projectData} from "./ProjectData";
import React from "react";
import Counter from "../Count";
import ProjectCard from "./ProjectCard";
import {useInView} from "react-intersection-observer";

export default function Projects() {
    const {ref: myRef, inView: myElementIsVisible} = useInView();
    return (
        <Section id={"projects"} title={"Projects"}>
            <div className={"w-full h-full flex flex-col justify-center items-center mt-5"} ref={myRef}>
                <div className={`grid tablet:grid-cols-2 grid-cols-1 gap-3 w-full flex items-center justify-center`}>
                    {projectData.map((project:ProjectModel):JSX.Element => {
                        const {name, desc, year, background, technologies, animation} = project
                        return(
                            <ProjectCard name={name} desc={desc} year={year} background={background} technologies={technologies} visible={myElementIsVisible} animation={animation} />
                        )
                    })}
                </div>
            </div>

        </Section>
    )
}
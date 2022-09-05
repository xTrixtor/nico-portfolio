import Section from "../Section";
import {ProjectModel} from "../../models/ProjectModel";
import {projectData} from "./ProjectData";
import React from "react";
import Counter from "../Count";

export default function Projects() {
    return (
        <Section id={"projects"} title={"Projects"}>
            <div className={"w-full tablet:h-full h-full"}>
                <div className={"w-full h-full flex flex-col justify-center items-center"}>
                    {projectData.map((project: ProjectModel): JSX.Element => {
                        const {name, desc, year, tailWindConfig, technologies} = project;
                        return (
                            <div
                                className={`flex w-full h-full justify-center items-center ${tailWindConfig} my-1`}>
                                <div
                                    className={"tablet:w-32 w-16 tablet:h-32 h-16 rounded-full bg-green-300 flex justify-center items-center text-white font-bold my-3"}>
                                    <Counter endCount={`${year}`} duration={"2"}/>
                                </div>
                                <div className={"flex flex-col justify-center items-center mx-5 tablet:w-1/3 w-full my-1"}>
                                    <div className={"text-xl font-semibold"}>
                                        {name}
                                    </div>
                                    <div className={"text-center tablet:text-base text-sm"}>
                                        {desc}
                                    </div>
                                </div>
                                <div className={"flex flex-col py-3"}>
                                    <div className={"flex justify-center text-xl"}>Technolgies Used</div>
                                    {technologies.map((technology: string): JSX.Element => {
                                        return (
                                            <div className={"flex"}>
                                                <li className={"pl-10 text-brand list-desc"}>
                                                </li>
                                                {technology}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Section>
    )
}
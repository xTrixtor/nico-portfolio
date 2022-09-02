import { CurriculumData } from "./CurriculumData";
import { CurriculumModel } from "../../models/CurriculumModel";
import React from "react";
import { useInView } from "react-intersection-observer";
import Section from "../Section";

export default function CurriculumVitae(): JSX.Element {
  return (
    <Section id={"aboutMe"} title={"About Me"}>
      <div className={"grid tablet:grid-cols-3 grid-cols-1 mx-8"}>
        <div className={`flex-col col-span-2 py-5`}>
          <div className={"flex w-full justify-center"}>
            <img
              src="images/Me.jpg"
              className={"rounded-full tablet:w-96 tablet:h-96 w-48 h-48"}
            />
          </div>
          <div
            className={
              "flex-col w-full justify-center tablet:text-3xl text-sm text-center px-8 py-8"
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </p>
          </div>
        </div>
        <div className="row-span-2">
          {CurriculumData.map((curriculumData: CurriculumModel) => {
            const { ref: myRef, inView: myElementIsVisible } = useInView();
            return (
              <div
                className="text-xl tracking-wide flex justify-center items-center px-5"
                ref={myRef}
              >
                <div
                  className={`w-full border-l-2 ${
                    myElementIsVisible ? "glowUpAnimation" : ""
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white border-2 rounded-full border-slate-300 transform -translate-x-[10px] transform -translate-x-[13px] ${
                      myElementIsVisible ? "glowUpAnimation" : ""
                    }`}
                  ></div>
                  <CurriculumStepPoint
                    tailWindConf="text-brand font-bold"
                    onFocus={myElementIsVisible}
                  >
                    {curriculumData.title}
                  </CurriculumStepPoint>
                  <CurriculumStepPoint
                    tailWindConf={"flex font-bold"}
                    onFocus={myElementIsVisible}
                  >
                    {curriculumData.from} - {curriculumData.until}
                  </CurriculumStepPoint>
                  <CurriculumStepPoint
                    tailWindConf={"font-bold"}
                    onFocus={myElementIsVisible}
                  >
                    {curriculumData.company} (
                    <a
                      className="text-brand text-base"
                      href={curriculumData.companyHref}
                    >
                      Website
                    </a>
                    )
                  </CurriculumStepPoint>

                  {curriculumData.skills.map((skill: string): JSX.Element => {
                    return (
                      <div className={"flex"}>
                        <li className={"pl-10 text-brand list-desc"}></li>
                        <div className={"font-semibold"}>{skill}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export interface PointProps {
  children: React.ReactNode;
  onFocus: boolean;
  tailWindConf: string;
}

export function CurriculumStepPoint(props: PointProps): JSX.Element {
  const { children, tailWindConf, onFocus } = props;
  return (
    <div className={`px-5 py-1 border-slate-300 ${tailWindConf}`}>
      {children}
    </div>
  );
}

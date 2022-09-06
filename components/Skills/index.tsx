import { Component } from "react";
import { skillsData } from "./SkillsData";
import { SkillModel } from "../../models/SkillModel";
import SkillBox from "./SkillBox";
import Section from "../Section";

class Skills extends Component {
  render() {
    return (
      <Section id="skills" title={"Skills"}>
        <div className="grid tablet:grid-cols-5 grid-cols-2">
          {skillsData.map((skill: SkillModel, key: number): JSX.Element => {
            return (
              <SkillBox name={skill.name} desc={skill.desc} icon={skill.icon} />
            );
          })}
        </div>
      </Section>
    );
  }
}

export default Skills;

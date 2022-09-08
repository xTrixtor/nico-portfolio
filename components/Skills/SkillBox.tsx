import { SkillModel } from "../../models/SkillModel";
import { useState } from "react";
import SkillModal from "./SkillModal";

function SkillBox(skill: SkillModel): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="flex justify-center py-6 duration-200 mx-10 rounded-xl border-green-300 hover:border-x-2 hover:cursor-pointer my-5 mx-2 skillCard"
    >
      <div className="flex-col">
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-brand flex justify-center items-center border-[3px] skillIcon">
            <i
              className={skill.icon + " text-slate-100 text-5xl rounded-full"}
            ></i>
          </div>
        </div>
        <div className="tablet:text-4xl text-xl text-center font-bold">
          {skill.name}
        </div>
        <SkillModal
          title={skill.name}
          isOpen={showModal}
          closeModal={() => setShowModal(!showModal)}
        >
          {skill.desc}
        </SkillModal>
      </div>
    </div>
  );
}

export default SkillBox;

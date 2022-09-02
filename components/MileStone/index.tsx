import MileStoneModel from "../../models/MileStoneModel";
import { MileStoneData } from "./MileStoneData";
import MileStoneRow from "./MileStoneRow";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Section from "../Section";

function MileStone() {
  const [onFocus, setOnFocus] = useState(false);
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <Section id={"mileStone"} title={"Milestones"} titleConfig={"text-slate-300"}>
      <div ref={myRef} >
        {myElementIsVisible ? (
            <div className="py-8 bg-transparent">
              {MileStoneData.map((milestone: MileStoneModel) => {
                return (
                    <div onClick={() => setOnFocus(!onFocus)}>
                      <MileStoneRow
                          years={milestone.years}
                          yearsDesc={milestone.yearsDesc}
                          desc={milestone.desc}
                      />
                    </div>
                );
              })}
            </div>
        ) : (
            <></>
        )}
      </div>
    </Section>
  );
}

export default MileStone;

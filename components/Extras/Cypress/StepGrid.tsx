import {stepGridData} from "../../../config/StepGridData";
import {StepGridModel} from "../../../models/StepGridModel";
import StepGridBox from "./StepGridBox";

export default function StepGrid() {
    return (
            <div className="grid tablet:grid-cols-2 grid-cols-1 gap-1 my-5 bg-slate-300">
                {stepGridData.map((stepGridData:StepGridModel, key: number) => (
                    <StepGridBox src={stepGridData.src} desc={stepGridData.desc} key={key}/>
                ))}
            </div>
    );
}

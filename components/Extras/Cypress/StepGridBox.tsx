import { Component } from "react";
import {StepGridModel} from "../../../models/StepGridModel";

export interface GridStepProps {
    src:string;
    desc:string;
}

export default function StepGridBox(props:GridStepProps){
    const {src, desc} = props;
        return (
            <div className={"transition ease-in duration-300 transform flex justify-center items-center py-3 px-3"}>
                <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0 cursor-pointer">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-xs tablet:font-bold tablet:text-xl">
                        {desc}
                    </div>
                </div>
                <img src={src} alt="" className="bg-cover bg-center object-cover rounded-xl" />
            </div>
        );
}


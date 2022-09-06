import {FooterConfig} from "./FooterConfig";
import {FooterModel} from "../../models/FooterModel";
import Section from "../Section";

export default function Footer(): JSX.Element {
    return (
            <div className={"w-full h-full py-10"} id={"footer"}>
                <div className={"flex flex-col justify-center items-center text-white text-xl py-2"}>
                    <div className={"flex text-6xl text-white font-bold py-2"}>
                        Böhner Nico
                    </div>
                    <div>
                        Programmierer aus Leidenschaft
                    </div>
                    <div className={"flex justify-center items-center py-2"}>
                        <a href={"/impressum"} className={"text-brand"}>
                            Impressum
                        </a>
                        <div className={"text-xl font-black mx-1"}>|</div>
                        <a href={"/datenschutz"} className={"text-brand"}>
                            Datenschutz
                        </a>
                    </div>
                    <div className={"py-2"}>
                        <p>© 2022 Nico Böhner. Alle Rechte vorbehalten.</p>
                    </div>
                    <div className={"flex"}>
                        <p className={"flex"}>Designed by
                            <p className={"text-brand ml-1"}>Böhner Nico</p>
                        </p>
                    </div>
                </div>
            </div>
    )
}
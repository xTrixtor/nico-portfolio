import {Component} from "react";

class Footer extends Component{
    render() {
        return (
            <div className={"w-full h-full py-10"} id={"footer"}>
                <div className={"flex flex-col justify-center items-center text-white tablet:text-xl text-base py-2 text-center"}>
                    <div className={"flex tablet:text-6xl text-3xl text-white font-bold py-2"}>
                        <a href={"/"}>Böhner Nico</a>
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
                        <div>© 2022 Nico Böhner. Alle Rechte vorbehalten.</div>
                    </div>
                    <div className={"flex"}>
                        <div className={"flex"}>Designed by
                            <div className={"text-brand ml-1"}>Böhner Nico</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
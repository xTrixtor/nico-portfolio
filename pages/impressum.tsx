import Footer from "../components/Footer";

export default function impressum(): JSX.Element {
    return (
        <div className={"flex flex-col w-full h-[100vh]"}>
            <div id={"footer"} className={"w-full h-[20%] flex flex-col justify-center items-center"}>
                <div className={"text-3xl text-white font-bold py-5"}>
                    Impressum
                    <div
                        id={"titleUnderline"}
                        className={"flex justify-center items-center pb-3"}
                    />
                </div>
                <div className={"pb-3"}>
                    <a className={"btn btn-primary bg-brand duration-500 hover:bg-slate-400 border-0 hover:-translate-y-2"}
                       href={"/"}>Zurück</a>
                </div>
            </div>
            <div className={"w-full h-full flex px-10 py-5 flex-col justify-evenly"}>
                <div className={"flex flex-col tablet:text-2xl text-sm font-medium text-white py-5 items-center"}>
                    <div>Nico Böhner</div>
                    <div>Mannheimer Straße 137</div>
                    <div>68309 Mannheim</div>
                </div>
                <div className={"flex flex-col tablet:text-2xl text-sm font-medium text-white py-5 items-center"}>
                    <div>Telefon: 017657835334</div>
                    <div>E-Mail: nico.boehner1999@gmail.com</div>
                </div>
                <div className={"flex flex-col tablet:text-2xl text-sm font-medium text-white py-5 items-center"}>
                    <div>Dieses Impressum wurde mit dem Generator von <a className={"text-brand"} href="https://www.einfach-abmahnsicher.de">Einfach Abmahnsicher</a> in Kooperation mit <a className={"text-brand"} href="https://www.prigge-recht.de">PRIGGE Recht</a> erstellt.</div>
                </div>
            </div>

            <div className={"bottom-0 w-full"}>
                <Footer/>
            </div>
        </div>
)
}
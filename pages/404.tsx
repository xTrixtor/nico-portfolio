import Footer from "../components/Footer";

export default function Custom404(): JSX.Element {
    return (
        <div className={"flex flex-col w-full h-screen"}>
            <div id={"footer"} className={"w-full h-[20%] flex flex-col justify-center items-center"}>
                <div className={"text-3xl text-white font-bold py-5"}>
                    Leider ist etwas schief gelaufen
                </div>
                <div className={"pb-3"}>
                    <a className={"btn btn-primary bg-brand duration-500 hover:bg-slate-400 border-0 hover:-translate-y-2"}
                       href={"/"}>Zurück zur Hauptseite</a>
                </div>
            </div>
            <div className={"flex h-full items-center justify-center text-6xl font-black"}>
                404 Page not Found
            </div>
            <div className={"bottom-0 w-full"}>
                <Footer/>
            </div>
        </div>
    )
}
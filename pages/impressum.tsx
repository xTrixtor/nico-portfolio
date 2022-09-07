export default function impressum(): JSX.Element {
    return (
        <div className={"text-center"}>
            <div id={"footer"}>
                <div className={"text-3xl text-white font-bold py-5"}>
                    Impressum
                    <div
                        id={"titleUnderline"}
                        className={"flex justify-center items-center pb-3"}
                    />
                </div>

                <div className={"pb-3"}>
                    <a className={"btn btn-primary bg-brand duration-500 hover:bg-slate-400 border-0 hover:-translate-y-2"} href={"/"}>Zurück zur Hauptseite</a>
                </div>
            </div>


        </div>
    )
}
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function impressum(): JSX.Element {
    return (
        <div className={"text-center"}>
            <Banner title={"Impressum"} buttonBoolean={true} buttonTitle={"Zurück"} buttonHref={"/"}/>
            <div className={"w-full h-full flex px-10 py-5 flex-col justify-evenly"}>
                <div className={"flex flex-col tablet:text-2xl text-sm font-medium dark:text-white text-black py-5 items-center"}>
                    <div>Nico Böhner</div>
                    <div>Mannheimer Straße 137</div>
                    <div>68309 Mannheim</div>
                </div>
                <div className={"flex flex-col tablet:text-2xl text-sm font-medium dark:text-white text-black py-5 items-center"}>
                    <div>Telefon: 017657835334</div>
                    <div>E-Mail: nico.boehner1999@gmail.com</div>
                </div>
                <div className={"flex flex-col tablet:text-2xl text-sm font-medium dark:text-white text-black py-5 items-center"}>
                    <div>Dieses Impressum wurde mit dem Generator von <a className={"text-brand"} href="https://www.einfach-abmahnsicher.de">Einfach Abmahnsicher</a> in Kooperation mit <a className={"text-brand"} href="https://www.prigge-recht.de">PRIGGE Recht</a> erstellt.</div>
                </div>
            </div>

            <div className={"bottom-0 w-full"}>
                <Footer/>
            </div>
        </div>
)
}
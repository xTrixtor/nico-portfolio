import Section from "../../Section";
import SectionTitle from "../../Section/SectionTitle";
import StepGrid from "./StepGrid";

export default function CypressBlog(): JSX.Element {
    return (
        <div className={"tablet:mt-[75px]"}>
            <Section id={"cypress"} title={"Cypress"}>
                <div className={"flex flex-col justify-center items-center px-10"}>
                    <img src={"/images/extras/cypress/cypress.io.png"}
                         className={"w-24 h-24 text-white m-5 bg-cover bg-center object-cover"}/>
                    <div className={"block tablet:mx-10 my-3 tablet:text-xl text-sm font-semibold text-center"}>
                        Die Open-Source Lösung Cypress.io für automatisierte End-to-End-Webtests ist eine interessante
                        Alternative zu Selenium und ein All-in-one-Test-Framework. Bisher waren End-to-End-Tests
                        schwierig, mit Cypress konfiguriert und schreibt man Webtests, welche sich leicht debuggen lassen.
                        Durch Cypress kann man sein Test-Driven-Development auch auf das Web übernehmen.
                        Mithilfe von Cypress können wir das Verhalten eines Benutzers nachstellen. Hierfür können wir beispielsweise
                        einen Button aus dem DOM selektieren und diesen künstlich "drücken" lassen. Änderungen, welche durch diese Interaction
                        entstehen, können mit den Cypress getestet werden.
                        Cypress macht bei jedem Step ein Snippit von der Webseite, damit man nachvollziehen kann wie die Webseite auf die Useraction reagiert
                    </div>
                    <img src={"/images/extras/cypress/Overview.png"}
                         className={"m-5 rounded-lg bg-cover bg-center object-cover"}/>

                    <SectionTitle title={"Cypress Testing"}/>
                    <StepGrid/>

                </div>
            </Section>
        </div>
    )
}
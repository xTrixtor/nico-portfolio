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
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
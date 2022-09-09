import Footer from "../components/Footer";
import NavBar from "../components/NavBar/NavBar";
import {extraNavBarData} from "../config/ExtraNavBarData";
import CypressBlog from "../components/Extras/Cypress";

export default function extras():JSX.Element{
    return(
        <div className={"text-center"}>
            <NavBar navBarConfig={extraNavBarData}/>
            <CypressBlog/>
            <Footer/>
        </div>
    )
}
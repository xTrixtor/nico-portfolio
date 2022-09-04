import type {NextPage} from "next";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Landing from "../components/Landing/landing";
import Skills from "../components/Skills";
import CurriculumVitae from "../components/Curriculum Vitae";
import SectionSeparator from "../components/Section/SectionSeparator";
import Contact from "../components/Contact";

const Home: NextPage = () => {
    return (
        <>
            <Header/>

            <NavBar/>

            <Landing/>

            <CurriculumVitae/>

            <SectionSeparator/>

            <Skills/>

            <SectionSeparator/>

            <Contact/>
        </>
    );
};

export default Home;

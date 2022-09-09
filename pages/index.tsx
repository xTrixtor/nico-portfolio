import type {NextPage} from "next";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Landing from "../components/Landing/landing";
import Skills from "../components/Skills";
import CurriculumVitae from "../components/Curriculum Vitae";
import SectionSeparator from "../components/Section/SectionSeparator";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import HomeButton from "../components/Home/HomeButton";
import {navBarData} from "../components/NavBar/NavBarData";

const Home: NextPage = () => {
    return (
        <>
            <Header/>

            <NavBar navBarConfig={navBarData}/>

            <Landing/>

            <CurriculumVitae/>

            <Skills/>

            <Projects/>

            <SectionSeparator/>

            <Contact/>

            <Footer/>

            <HomeButton/>
        </>
    );
};

export default Home;

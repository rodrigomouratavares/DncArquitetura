import{useContext} from 'react';
import Banner from "../components/Banner/banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectList from "../components/ProjectList/ProjectList";

//context
import { AppContext } from "../contexts/AppContext"

function Projects() {

    const appContext = useContext(AppContext);


    return(
   // <></> Fragments
   <>
   <Header />
   <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg"/>

   <div className="container">

   <ProjectList/>
   </div>

   <Footer />
   </>
    )
}

export default Projects;
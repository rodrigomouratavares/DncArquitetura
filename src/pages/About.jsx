import{useContext} from 'react';

import Banner from "../components/Banner/banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutText from "../components/AboutText/AboutText";

//context
import { AppContext } from "../contexts/AppContext"


function About() {
          const appContext = useContext(AppContext);
    
    return(
   // <></> Fragments
   <>
   <Header />
   <Banner title={appContext.languages[appContext.language].menu.about}  image="about.jpg"/>

   <div className="container">
<AboutText />
   </div>

   <Footer />
   </>
    )
}
export default About;
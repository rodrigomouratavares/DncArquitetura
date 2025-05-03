import{useContext} from 'react';
import Banner from "../components/Banner/banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

//context
import { AppContext } from "../contexts/AppContext"

function Contact() {

    const appContext = useContext(AppContext);


    return(
   // <></> Fragments
   <>
   <Header />
   <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg"/>

   <div className="container">
<ContactForm />

   </div>

   <Footer />
   </>
    )
}

export default Contact;
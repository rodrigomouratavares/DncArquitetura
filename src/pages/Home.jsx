import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectList from "../components/ProjectList/ProjectList";
function Home() {
    return(
   // <></> Fragments
        <>
        <Header />

        <div className="container">
            
        <Hero/>
        <ProjectList/>
        </div>
        {/* <Banner title="Home" image="about.jpg"/> */}
    
        <Footer />
        </>
    )
}

export default Home;
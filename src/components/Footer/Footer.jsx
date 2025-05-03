import { useContext } from "react"
import { Link } from "react-router-dom"


//assets
import "./Footer.css"
import Logo from '../../assets/dnc-logo.svg'
import BrasilIcon from '../../assets/brasil.svg'
import UsaIcon from '../../assets/usa.svg'
import FacebookIcon from '../../assets/facebook.svg'
import LinkdinIcon from '../../assets/linkedin.svg'
import InstagramIcon from '../../assets/instagram.svg'
import TwitterIcon from '../../assets/twitter.svg'

//button
import Button from "../Button/Button"

//context
import { AppContext } from "../../contexts/AppContext"

function Footer() {

    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} alt="" className="footer-logo"/>
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="https://facebook.com" target="_blank">
                                <img src={FacebookIcon} alt="" />
                            </a>

                            <a href="https://x.com" target="_blank">
                                <img src={TwitterIcon} alt="" />
                            </a>

                            <a href="https://linkedin.com" target="_blank">
                                <img src={LinkdinIcon} alt="" />
                            </a>

                            <a href="https://instagram.com" target="_blank">
                                <img src={InstagramIcon} alt="" />
                            </a>


                        </div>

                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul >
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                           
                        </div>
                        
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex jc-space-between footer-copy">
        <p className="grey-1-color">Copyright © DNC - 2024</p>
        <div className="langs-area d-flex">
            <Button buttonStyle={"unstyled"} onClick = {()=> changeLanguage('br')}>
            <img src={BrasilIcon} alt="" height="29px"/>
            </Button>
            <Button buttonStyle={"unstyled"} onClick={() => changeLanguage('en')}>
            <img src={UsaIcon} alt="" height="29px"/>
            </Button>
        </div>
            </div>
        </footer>
    )

}
export default Footer
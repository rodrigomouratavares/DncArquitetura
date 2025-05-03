import { Link } from 'react-router-dom'
import { useContext } from "react"

//context
import { AppContext } from "../../contexts/AppContext"

import './Hero.css'
import Button from '../Button/Button';
function Hero() {
    const appContext = useContext(AppContext);

    return (
        // <></> Fragments
        <div className='hero d-flex al-center'>
            <div className='hero-text'>

                <h1>{appContext.languages[appContext.language].hero.title}</h1>
        <p>{appContext.languages[appContext.language].hero.subtitle}</p>
        <Button buttonStyle="secondary" arrow>
        {appContext.languages[appContext.language].hero.cta}
        </Button>
            </div>

        </div>
    )
}

export default Hero;
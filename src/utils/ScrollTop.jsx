import {useEffect} from 'react';
import { useLocation } from 'react-router-dom'; //* Hooks do proprio react router dom*//

const ScrollToTop= () => {
    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [pathname]) //*Esse parametro é para que o effect seja chamado apenas se esse evento acontecer. Pra melhorar a performance. Define quantas vezes o effect vai ser rodado *//

    return null;
}
export default ScrollToTop
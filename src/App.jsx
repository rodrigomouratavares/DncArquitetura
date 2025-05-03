import { useContext } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 

//PAGES
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
//* Utils *//
import ScrollToTop from './utils/ScrollTop'
import {AppContext} from './contexts/AppContext'

function App() {
 const appContext = useContext(AppContext)
 if(appContext.loading) {
  return <LoadingSpinner />
 }
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
    
      </Routes>
    </Router>
  )
}

export default App
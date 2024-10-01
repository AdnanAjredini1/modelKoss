import { Outlet, useLocation } from "react-router-dom"
import MobileNav from "./Components/MobileNavbar/MobileNav"
import Nav from "./Components/Navabar/Nav"
import Footer from "./Components/Footer/Footer"
import { IntlProvider } from "react-intl"
import { useSelector } from "react-redux"
import { translate } from "./translation/translate"
import { useEffect } from "react"


function App() {
  const language = useSelector(state => state.language.language);
  const location = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <>
    <IntlProvider locale={language} messages={translate[language]}>
     <Nav />
     <MobileNav />
     <div id="detail" style={{marginTop:'100px'}}>
        <Outlet />
      </div>
     <Footer/>
     </IntlProvider>
    
    </>
  )
}

export default App

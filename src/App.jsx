import { Outlet } from "react-router-dom"
import MobileNav from "./Components/MobileNavbar/MobileNav"
import Nav from "./Components/Navabar/Nav"
import Footer from "./Components/Footer/Footer"
import { IntlProvider } from "react-intl"
import { useSelector } from "react-redux"
import { translate } from "./translation/translate"


function App() {
  const language = useSelector(state => state.language.language);

  return (
    <>
    <IntlProvider locale={language} messages={translate[language]}>
     <Nav />
     <MobileNav />
     <div id="detail">
        <Outlet />
      </div>
     <Footer/>
     </IntlProvider>
    
    </>
  )
}

export default App

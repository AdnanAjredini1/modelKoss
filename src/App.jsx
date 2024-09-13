import { Outlet } from "react-router-dom"
import MobileNav from "./Components/MobileNavbar/MobileNav"
import Nav from "./Components/Navabar/Nav"
import Footer from "./Components/Footer/Footer"

function App() {
  

  return (
    <>
     <Nav />
     <MobileNav />
     <div id="detail">
        <Outlet />
      </div>
     <Footer/>
    
    </>
  )
}

export default App

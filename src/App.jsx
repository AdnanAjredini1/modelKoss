import { Outlet } from "react-router-dom"
import MobileNav from "./Components/MobileNavbar/MobileNav"
import Nav from "./Components/Navabar/Nav"

function App() {
  

  return (
    <>
     <Nav />
     <Outlet />
     <MobileNav />
     
    
    </>
  )
}

export default App

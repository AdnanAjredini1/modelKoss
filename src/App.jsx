import { Outlet, useLocation } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { translate } from "./translation/translate";
import {  lazy, Suspense, useEffect } from "react";
import Loading from "./Components/Loading";



function App() {
  const language = useSelector((state) => state.language.language);
  const location = useLocation();
  const Nav = lazy(() => import('./Components/Navabar/Nav.jsx'));
const MobileNav = lazy(() => import('./Components/MobileNavbar/MobileNav'));
const Footer = lazy(() => import('./Components/Footer/Footer'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      
      <IntlProvider locale={language} messages={translate[language]}>
      <Suspense fallback={<Loading />}>
      <Nav />
        <MobileNav />
        <div id="detail" style={{ marginTop: "100px" }}>
          <Outlet />
        </div>
        <Footer />
       
      </Suspense>
        
      </IntlProvider>
    </>
  );
}

export default App;

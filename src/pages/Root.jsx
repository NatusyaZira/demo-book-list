import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
const RootLayout = () => {
    return <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
}

export default RootLayout;
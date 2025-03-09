import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
const Error = () => {
    return (<>
        <Header/>
        <div className="error-page">
            <h2>An error occured!</h2>
            <p>Could not find this page!</p>
        </div>
        <Footer/>
     </>
    )
}

export default Error;
 import { Link } from "react-router-dom";
 import bookLogo from "../assets/book.svg";
 const Header = () => {
    return (
        <header> <Link to="/" className="header"><img src={bookLogo} alt="Logo for Book"/><h1>Book List App</h1></Link></header>
       
    )
}

export default Header;
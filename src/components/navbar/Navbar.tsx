import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = (): JSX.Element => {
    return (
        <div id="Navbar">
            <nav>
                <NavLink className={ ({ isActive }) => ( isActive ? 'link active' : 'link' ) } to="contact">CONTACT</NavLink>
                <NavLink className="nav-logo" to="/">
                    <img src={Logo} alt="Pogriella Logo" />
                </NavLink>
                <NavLink className={ ({ isActive }) => ( isActive ? 'link active' : 'link' ) } to="projects">PROJECTS</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
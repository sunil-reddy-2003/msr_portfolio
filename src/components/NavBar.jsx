import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <nav className="liquid-nav">
            <div
                className="brand-block cursor-pointer"
                onClick={() => navigate("/")}
            >
                <h1 className="font-bold text-lg md:text-xl">Sunil Reddy Mandadi</h1>
                <h2 className="font-semibold text-sm md:text-md">Full Stack Developer</h2>
            </div>

            <button
                className="nav-toggle"
                onClick={() => setShow((prev) => !prev)}
                aria-label="Toggle menu"
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <div
                className={`nav-links ${show ? "open" : ""}`}
            >
                <NavLink
                    to="/"
                    end
                    className="nav-link"
                    onClick={() => setShow(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className="nav-link"
                    onClick={() => setShow(false)}
                >
                    About
                </NavLink>
                <NavLink
                    to="/skills"
                    className="nav-link"
                    onClick={() => setShow(false)}
                >
                    Skills
                </NavLink>
                <NavLink
                    to="/projects"
                    className="nav-link"
                    onClick={() => setShow(false)}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className="nav-link"
                    onClick={() => setShow(false)}
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;

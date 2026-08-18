import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import GooeyNav from "./GooeyNav/GooeyNav";

const particleDistances = [90, 10];
const particleColors = [1, 2, 3, 1, 2, 3, 1, 4];

const NavBar = () => {
    const navigate = useNavigate();
    const navLinksRef = useRef(null);
    const [show, setShow] = useState(false);
    const [effectTarget, setEffectTarget] = useState(null);
    const [effectKey, setEffectKey] = useState(0);

    const handleNavItemClick = (event) => {
        setEffectTarget(event.currentTarget);
        setEffectKey((key) => key + 1);
        setShow(false);
    };

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
                ref={navLinksRef}
                className={`nav-links ${show ? "open" : ""}`}
            >
                <GooeyNav
                    containerRef={navLinksRef}
                    targetElement={effectTarget}
                    trigger={effectKey}
                    particleCount={5}
                    particleDistances={particleDistances}
                    particleR={100}
                    animationTime={600}
                    timeVariance={200}
                    colors={particleColors}
                />
                <NavLink
                    to="/"
                    end
                    className="nav-link"
                    onClick={handleNavItemClick}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className="nav-link"
                    onClick={handleNavItemClick}
                >
                    About
                </NavLink>
                <NavLink
                    to="/skills"
                    className="nav-link"
                    onClick={handleNavItemClick}
                >
                    Skills
                </NavLink>
                <NavLink
                    to="/projects"
                    className="nav-link"
                    onClick={handleNavItemClick}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className="nav-link"
                    onClick={handleNavItemClick}
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;

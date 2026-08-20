import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import GooeyNav from "./GooeyNav/GooeyNav";

const particleDistances = [90, 10];
const particleColors = [1, 2, 3, 1, 2, 3, 1, 4];
const navigationItems = [
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Education", to: "/about#education" },
    { label: "Contact", to: "/contact" },
];

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
                className={`nav-toggle ${show ? "is-open" : ""}`}
                onClick={() => setShow((previous) => !previous)}
                aria-label={show ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={show}
                aria-controls="primary-navigation"
            >
                <span className="nav-toggle-icon" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </span>
            </button>

            <div
                id="primary-navigation"
                ref={navLinksRef}
                className={`nav-links ${show ? "open" : ""}`}
                style={{ "--menu-item-count": navigationItems.length }}
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
                {navigationItems.map((item, index) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        className="nav-link"
                        onClick={handleNavItemClick}
                        style={{ "--menu-index": index }}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
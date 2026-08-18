import { motion } from "motion/react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import NavBar from "../components/NavBar";

const MotionDiv = motion.div;

const Layout = () => {
    const location = useLocation();
    const navigationType = useNavigationType();
    const shouldAnimateEntry = navigationType !== "POP";

    return (
        <div className="site-layout">
            <NavBar />
            <main className="site-main">
                <MotionDiv
                    key={location.pathname}
                    className="page-transition"
                    initial={shouldAnimateEntry ? { y: "100vh" } : false}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 240, damping: 30, mass: 0.8 }}
                >
                    <Outlet />
                </MotionDiv>
            </main>
        </div>
    );
};

export default Layout;
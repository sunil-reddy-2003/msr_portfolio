import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";
const Layout=()=>{
    return(
        <div className="site-layout">
            
            <NavBar/>
            <main className="site-main">
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;

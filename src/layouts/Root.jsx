import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                footer
            </footer>
        </div>
    );
};

export default Root;
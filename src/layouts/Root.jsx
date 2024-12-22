import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <header className="bg-gray-200 dark:bg-neutral-900">
                <Navbar />
            </header>
            <main className="min-h-[calc(100vh-24.75rem)]">
                <Outlet></Outlet>
            </main>
            <footer className="bg-gray-200 dark:bg-neutral-900">
                <Footer />
            </footer>
        </div>
    );
};

export default Root;

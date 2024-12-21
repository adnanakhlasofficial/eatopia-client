import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header>
                navbar
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
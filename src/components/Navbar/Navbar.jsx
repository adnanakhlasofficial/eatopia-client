import { Link, NavLink } from "react-router-dom";
import useMode from "../../hooks/useMode";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
    const { changeTheme, mode } = useMode();

    return (
        <div className="flex justify-between items-center py-4 wrapper">
            <h1>
                <Link to={"/"}>Eatopia</Link>
            </h1>
            <div className="flex items-center gap-12">
                <div>
                    <ul className="flex gap-6">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/all-foods"}>All Foods</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/gallery"}>Gallery</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button onClick={changeTheme}>
                        {mode === "light" ? <MdOutlineDarkMode size={24} /> : <MdOutlineWbSunny size={24} />}
                    </button>
                    <Link className="btn" to={"/login"}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

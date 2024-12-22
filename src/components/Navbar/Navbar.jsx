import { Link, NavLink } from "react-router-dom";
import useMode from "../../hooks/useMode";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { changeTheme, mode } = useMode();
    const { logoutUser, user } = useContext(AuthContext);

    return (
        <div className="flex justify-between items-center py-4 wrapper">
            <h1>
                <Link to={"/"}>Eatopia</Link>
            </h1>
            <div className="flex items-center gap-12 lg:flex-row flex-row-reverse">
                <div className="hidden lg:block">
                    <ul className="flex gap-6 items-center">
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
                        {mode === "light" ? (
                            <MdOutlineDarkMode size={24} />
                        ) : (
                            <MdOutlineWbSunny size={24} />
                        )}
                    </button>
                    {user && user?.email ? (
                        <button onClick={logoutUser} className="btn">
                            Logout
                        </button>
                    ) : (
                        <Link className="btn" to={"/login"}>
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

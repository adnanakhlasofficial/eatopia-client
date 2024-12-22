import { Link, NavLink } from "react-router-dom";
import useMode from "../../hooks/useMode";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { changeTheme, mode } = useMode();
    const { logoutUser, user } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);

    return (
        <div className="flex justify-between items-center py-4 wrapper relative">
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
                        <>
                            <button
                                onClick={() => setMenu(!menu)}
                                className="w-10 h-10"
                            >
                                <img
                                    className="ring ring-blue-500 rounded-full object-center object-cover"
                                    src={user?.photoURL}
                                    alt={user?.displayName}
                                />
                            </button>
                            <div
                                className={`absolute top-full z-10 p-4 bg-slate-300 dark:bg-neutral-700 rounded-lg w-52 right-0 ${
                                    menu ? "block" : "hidden"
                                }`}
                            >
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            className="hover:bg-blue-500 transition-colors rounded-md py-1 px-2 w-full block"
                                            to={"/my-foods"}
                                        >
                                            My Foods
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="hover:bg-blue-500 transition-colors rounded-md py-1 px-2 w-full block"
                                            to={"/add-food"}
                                        >
                                            Add Food
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="hover:bg-blue-500 transition-colors rounded-md py-1 px-2 w-full block"
                                            to={"/my-orders"}
                                        >
                                            My Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            className="hover:bg-blue-500 transition-colors rounded-md py-1 px-2 w-full text-left"
                                            onClick={logoutUser}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
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

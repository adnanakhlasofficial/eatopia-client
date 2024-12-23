import { Link, NavLink, useLocation } from "react-router-dom";
import useMode from "../../hooks/useMode";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

const Navbar = () => {
    const { changeTheme, mode } = useMode();
    const { logoutUser, user, loading } = useContext(AuthContext);
    const [menu, showMenu] = useState(false);
    const [navMenu, showNavMenu] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        showMenu(false);
        showNavMenu(false);
    }, [pathname]);

    const handleLogout = () => {
        logoutUser()
        .then(() => {
            toast.success("Signed out. Have a great day!")
        })
    };

    return (
        <div className="flex justify-between items-center py-4 wrapper relative">
            <h1>
                <Link to={"/"}>Eatopia</Link>
            </h1>
            <div className="flex items-center gap-8 lg:gap-12 lg:flex-row flex-row-reverse">
                <div
                    className={`bg-blue-500 lg:bg-inherit absolute transition-all top-0 ${
                        navMenu ? "left-0" : "-left-full"
                    } w-3/4 h-screen z-20 flex px-8 py-12 lg:static lg:w-auto lg:h-auto lg:p-0 lg:block`}
                >
                    <ul className="flex flex-col lg:flex-row gap-6 lg:items-center">
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
                <div className="block lg:hidden">
                    <button
                        onClick={() => showNavMenu(!navMenu)}
                        className="flex items-center"
                    >
                        {navMenu ? (
                            <IoCloseOutline size={32} />
                        ) : (
                            <HiBars3 size={32} />
                        )}
                    </button>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button onClick={changeTheme}>
                        {mode === "light" ? (
                            <MdOutlineDarkMode size={24} />
                        ) : (
                            <MdOutlineWbSunny size={24} />
                        )}
                    </button>
                    {loading ? (
                        <ClipLoader
                            color={"#3B82F6"}
                            loading={true}
                            size={24}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) : (
                        <>
                            {user && user?.email ? (
                                <>
                                    <button
                                        onClick={() => showMenu(!menu)}
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
                                                    onClick={handleLogout}
                                                >
                                                    Sign Out
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <Link className="btn" to={"/login"}>
                                    Sign In
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

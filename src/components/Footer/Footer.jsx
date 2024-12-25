import { Link } from "react-router-dom";
import darkLogo from "../../assets/logo/dark.png";
import lightLogo from "../../assets/logo/light.png";
import useMode from "../../hooks/useMode";

const Footer = () => {
    const { mode } = useMode();
    return (
        <div className="wrapper grid grid-cols-1 lg:grid-cols-3 py-20 gap-12">
            <div className="space-y-2">
                <div className="mb-6">
                    <img
                        className="w-16 -rotate-12"
                        src={mode === "light" ? darkLogo : lightLogo}
                        alt="logo"
                    />
                </div>

                <h2 className="footer-heading">
                    Eatopia - Where Flavor Meets Passion
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Join us at Eatopia and experience culinary delights crafted
                    with love and the finest ingredients. Your taste adventure
                    awaits!
                </p>
            </div>
            <div className="space-y-4 lg:place-self-center">
                <h2 className="footer-title">Services</h2>
                <ul className="space-y-2">
                    <li>
                        <Link>Branding</Link>
                    </li>
                    <li>
                        <Link>Design</Link>
                    </li>
                    <li>
                        <Link>Marketing</Link>
                    </li>
                    <li>
                        <Link>Advertisement</Link>
                    </li>
                </ul>
            </div>
            <div className="space-y-4 lg:place-self-center">
                <h2 className="footer-title">Company</h2>
                <ul className="space-y-2">
                    <li>
                        <Link>About Us</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                    <li>
                        <Link>Jobs</Link>
                    </li>
                    <li>
                        <Link>Press Kit</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;

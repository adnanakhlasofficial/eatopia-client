import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <div className="wrapper grid grid-cols-1 lg:grid-cols-3 py-20 gap-12">
            <div className="space-y-2">
                <h2 className="footer-heading">Eatopia Industries Ltd.</h2>
                <p className="text-gray-600 dark:text-gray-400">Providing reliable tech since 1992</p>
            </div>
            <div className="space-y-4">
                <h2 className="footer-title">Services</h2>
                <ul className="space-y-2">
                    <li><Link>Branding</Link></li>
                    <li><Link>Design</Link></li>
                    <li><Link>Marketing</Link></li>
                    <li><Link>Advertisement</Link></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h2 className="footer-title">Company</h2>
                <ul className="space-y-2">
                    <li><Link>About Us</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>Jobs</Link></li>
                    <li><Link>Press Kit</Link></li>
                </ul>
            </div>
            
            
        </div>
    );
};

export default Footer;
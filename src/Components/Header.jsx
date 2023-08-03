import { useState,useEffect } from "react";
import NavbarMobile from './NavbarMobile';
import Hamburger from "./Hamburger";

const Header = () => {

    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop;
            setIsNavbarFixed(window.scrollY > fixedNav);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
            <div className="container">
                <div className="flex items-center justify-between relative">

                    <div className="px-4">
                        <a href="#home" className="font-bold text-lg text-primary block py-6">dpcandra</a>
                    </div>

                    <div className="flex items-center px-4">
                        <Hamburger/>                       
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;
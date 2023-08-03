import { useState } from "react";
import NavbarMobile from "./NavbarMobile";

const Hamburger = () => {

    const [hamburgerActive,setHamburgerActive] = useState(false);

    const hamburgerToggle = (element) => {
       setHamburgerActive(!hamburgerActive);
    }

    return(
        <>
            <button className={`lg:hidden block absolute right-4 ${hamburgerActive ? 'hamburger-active' : ''}`} onClick={hamburgerToggle} id="hamburger" name="hamburger" type="button">
                <span className="hamburger-line transition duration-300 ease-in-out  origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out  origin-bottom-left"></span>
            </button>  

            <NavbarMobile status={hamburgerActive} />
        </>
    )
}

export default Hamburger;
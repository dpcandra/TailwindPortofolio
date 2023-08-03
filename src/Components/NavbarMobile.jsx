
const NavbarMobile = (props) => {
    const { status } = props;
    return(
        <nav className={`lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full ${!status ? 'hidden' : ''}`} id="nav-menu">
            <ul className="block lg:flex">
                <li className="group">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary" href="#home">Beranda</a>
                </li>
                <li className="group">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary" href="#about">About</a>
                </li>
                <li className="group">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary" href="#portofolio">Portofolio</a>
                </li>
                <li className="group">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary" href="#clients">Clients</a>
                </li>
                <li className="group">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary" href="#blog">Blog</a>
                </li>
                <li className="group">
                    <a className="text-base text-dark py-2 mx-8 flex group-hover:text-primary" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export  default NavbarMobile;
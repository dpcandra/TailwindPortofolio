import FooterCopyRight from "./Components/FooterCopyRight";

const Footer = () => {
    return(
        <section className="bg-dark pt-24 pb-12">
            <div className="container">
                <div className="flex flex-wrap">

                    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h2 className="font-bold text-4xl text-primary">dpcandra</h2>
                        <h3 className="font-bold text-2xl mb-2 mt-3">Hubungi Kami</h3>
                        <p>dpcandra@gmail.com</p>
                        <p>Jl. Perum Graha Laksamana Mulya A11</p>
                        <p>Denpasar</p>
                    </div> 

                    <div className="w-full px-4 mb-12 text-slate-300 md:w-1/3">
                        <h3 className="font-semibold text-xl text-white mb-3">Kategori Tulisan</h3>
                        <ul className="text-slate-300">
                            <li><a href="" className="inline-block text-base hover:text-primary mb-3">Programming</a></li>
                            <li><a href="" className="inline-block text-base hover:text-primary mb-3">Technology</a></li>
                            <li><a href="" className="inline-block text-base hover:text-primary mb-3">Dogs</a></li>
                        </ul>
                    </div>

                    <div className="w-full px-4 mb-12 text-slate-300 md:w-1/3">
                        <h3 className="font-semibold text-xl text-white mb-3">Tautan</h3>
                        <ul className="text-slate-300">
                            <li><a href="#home" className="inline-block text-base hover:text-primary mb-3">Home</a></li>
                            <li><a href="#about" className="inline-block text-base hover:text-primary mb-3">About</a></li>
                            <li><a href="#clients" className="inline-block text-base hover:text-primary mb-3">Clients</a></li>
                            <li><a href="#portofolio" className="inline-block text-base hover:text-primary mb-3">Portofolio</a></li>
                            <li><a href="#blog" className="inline-block text-base hover:text-primary mb-3">Blog</a></li>
                            <li><a href="#contact" className="inline-block text-base hover:text-primary mb-3">Contact</a></li>
                           
                        </ul>
                    </div> 
                    
                </div>

                <FooterCopyRight/>
            </div>
        </section>
    )
}
export default Footer;
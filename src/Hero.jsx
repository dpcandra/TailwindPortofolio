import ButtonMain from "./Components/buttonMain";

const Hero = () => {
    return (
        <section id="home" className="pt-36">
            <div className="container">
                <div className="flex flex-wrap">

                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-primary md:text-xl">Halo Semua 👋, saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Candra Dharma</span></h1>
                        <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Full Stact <span className="text-dark">Web Programmer</span></h2>
                        <p className="font-medium text-secondary mb-10 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam.</p>

                        <ButtonMain link="https://instagram.com/kcandradp" label="Hubungi Saya"/>
                    </div>

                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="mt-10 relative lg:mt-0 lg:right-0">
                            <img className="max-w-full mx-auto" src="/images/candra.png" alt="Candra" />
                            <span className=" absolute -bottom-14 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#14b8a6" d="M50.8,-39.9C65.5,-22,76.8,-1,73,17.1C69.2,35.1,50.2,50,32.6,52.8C14.9,55.7,-1.5,46.4,-22.3,39.2C-43.2,31.9,-68.4,26.7,-74.3,13.4C-80.2,0.1,-66.7,-21.2,-51.1,-39.3C-35.5,-57.3,-17.7,-72.3,0.1,-72.4C18,-72.5,36.1,-57.8,50.8,-39.9Z" transform="translate(100 100) scale(1)" />
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero;
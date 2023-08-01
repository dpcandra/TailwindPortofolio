import SocialIcons from "./items/SocialIcons";

const About = () => {
    return (
        <section id="about" className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">

                    <div className="lg:w-1/2 w-full px-4 mb-10">
                        <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
                        <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Yuk Belajar Tailwind CSS!</h2>
                        <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas et reiciendis magni quam ad dolorum a!</p>
                    </div>

                    <div className="lg:w-1/2 w-full px-4 mb-10">
                        <h3 className="font-semibold tex-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Mari berteman</h3>
                        <p className="font-medium text-base text-secondary mb-6 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores dolore. Minus quis libero neque tempora laboriosam ut.</p>
                        <SocialIcons/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;
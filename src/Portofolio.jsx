import ProjectCard from "./Components/ProjectCard";
import SectionTitle from "./Components/SectionTitle";

const Portofolio = () => {
    return(
        <section className="pt-36 pb-16 bg-slate-100" id="portofolio">
            <div className="container">

                <SectionTitle
                    title="Portofolio"
                    heading="My Project"
                    paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt at tempore enim ipsam delectus quo sequi voluptatum velit est?"
                />

                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                     <ProjectCard
                        image="balikasnew.png"
                        title="Bali Kas Property"
                        description="CMS for selling Land and property Bali - Nuda Penida made with Laravel and Bootstrap."
                     />
                     <ProjectCard
                        image="balikasv1.png"
                        title="Bali Kas Property Old Version"
                        description="CMS for selling Land and property Bali - Nuda Penida made with PHP native"
                     />
                     <ProjectCard
                        image="tokodieselmurah.png"
                        title="Toko Diesel Murah"
                        description="Website for Promoting selling Electricity Generator and forklift."
                     />
                </div>

            </div>
        </section>
    )
}

export default Portofolio;
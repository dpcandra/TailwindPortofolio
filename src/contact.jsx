import SectionTitle from "./Components/SectionTitle";
import ButtonMain from "./Components/buttonMain";

const Contact = () => {
    return(
        <section id="contact" className="pt-36 pb-32">
            <div className="container">

                <div className="w-full px-4">
                    <SectionTitle
                        title="contact"
                        heading="Hubungi Kami"
                        paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, dolorum."
                    /> 
                </div>

                <form action="">
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base font-bold text-primary">Nama</label>
                            <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"/>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
                            <input type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"/>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="email" className="text-base font-bold text-primary">Pesan</label>
                            <textarea type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
                        </div>
                        <div className="w-full px-4">
                            <button className="text-base font-semibold text-white bg-primary py-2 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out w-full">Hubungi Saya</button>
                        </div>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Contact;
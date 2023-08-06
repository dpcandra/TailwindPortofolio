import LogoClient from './Components/LogoClient';

const Clients = () => {
    return(
        <section className="pt-36 pb-32 bg-slate-700" id="clients">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
                        <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungan Kerja Sama</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Adipisicing elit. Aspernatur sunt at tempore enim ipsam delectus quo sequi voluptatum velit est?</p>
                    </div>
                </div>

                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-center">
                        <LogoClient logoFile="balikas.svg"/>
                        <LogoClient logoFile="vgen.svg"/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Clients;
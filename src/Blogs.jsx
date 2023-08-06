import SectionTitle from "./Components/SectionTitle";
import Blog from "./Components/Blog";

const Blogs = () => {
    return(
        <section className="pt-36 pb-32 bg-slate-100" id="blog">
            <div className="container">
                <div className="w-full px-4">
                    <SectionTitle
                        title="Blog"
                        heading="Tulisan Terkini"
                        paragraph="Lorem Aspernatur sunt at tempore enim ipsam delectus quo sequi voluptatum velit est?"
                    />
                </div>

                <div className="flex flex-wrap">
                    
                    <Blog
                        image="https://source.unsplash.com/360x200?tech"
                        title="Tips Belajar Programming"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, dolor hic."
                    />
                    <Blog
                        image="https://source.unsplash.com/360x200?gpu"
                        title="Harga Komputer Meroket"
                        description="Lorem ipsum dolor, sit amet consectetur elit. Modi, dolor hic."
                    />
                    <Blog
                        image="https://source.unsplash.com/360x200?dogs"
                        title="Cara Menambah Nafsu Makan Anjing"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, dolor"
                    />

                </div>

            </div>
        </section>
    )
}

export default Blogs;
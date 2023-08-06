import ButtonCard from "../Components/ButtonCard";

const Blog = (props) => {
    const { title,description,image } = props;
    return(
        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img className="w-full" src={image} alt="" />
                <div className="py-8 px-6">
                    <h3 className="">
                        <a href="" className="Block mb-3 font-semibold hover:text-primary truncate">{title}</a>
                    </h3>
                    <p className="font-medium text-base text-secondary mb-4">{description}!</p>
                    <ButtonCard lable="Baca Selengkapnya" />
                </div>
            </div>
        </div>
    )
}

export default Blog;
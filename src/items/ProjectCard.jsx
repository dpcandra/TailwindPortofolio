const ProjectCard = (props) => {
    const { image,title,description } = props;

    return(
        <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
                <img width="w-full" src={`/images/${image}`} />
            </div>
            <h3 className="text-xl mb-3 mt-5 font-semibold text-dark">{title}</h3>
            <p className="font-medium text-base text-secondary">{description}</p>
        </div>
    )
}

export default ProjectCard;
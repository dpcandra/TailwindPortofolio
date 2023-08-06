const SectionTitle = (props) => {
    const { title,heading,paragraph } = props
    return (
        <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary mb-2">{title}</h4>
                <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">{heading}</h2>
                <p className="font-medium text-md text-secondary md:text-lg">{paragraph}</p>
            </div>
        </div>
    )
}

export default SectionTitle;
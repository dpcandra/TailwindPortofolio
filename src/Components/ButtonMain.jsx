const ButtonMain = (props) => {
    const { label,link } = props;

    return <a href={link} className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">{label}</a>
}

export default ButtonMain;
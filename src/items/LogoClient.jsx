const LogoClient = (props) => {
    const { logoFile } = props;
    return(
        <a href="" className="max-w-[120px] lg:mx-6 xl:mx-8 mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-500">
            <img src={`/images/${logoFile}`}/>
        </a>
    )
}

export default LogoClient;
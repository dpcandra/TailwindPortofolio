import SocialIcons from './SocialIcons';

const FooterCopyRight = () => {
    return (
        <div className="pt-10 border-t border-slate-700">
            <div className="flex justify-center w-full">
                 <SocialIcons/>
            </div>
            <p className="text-center mt-5 font-medium text-sm text-slate-500">Dibuat dengan ❤️ oleh <a href="" className="text-primary">Candra Dharma</a>, menggunakan React dan Tailwind CSS</p>
        </div>
    )
}

export default FooterCopyRight;
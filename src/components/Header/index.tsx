interface HeaderProps {
    title: string,
    subtitle: string
}

const Header = ({title, subtitle}: HeaderProps) => {
    return (
    <div className="p-8 font-sriracha">
        <h1 className="text-center text-4xl mb-4 md:text-6xl">{title}</h1>
        <h3 className="text-center text-xl md:text-center text-3xl">{subtitle}</h3>
    </div>
    )
}

export default Header;
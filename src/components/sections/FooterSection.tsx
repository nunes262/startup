import { FaTiktok, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    const icons = [
        {
            icon: <FaLinkedin />,
            href: "",
            id: "1",
        },
        {
            icon: <FaYoutube />,
            href: "",
            id: "2",
        },
        {
            icon: <FaInstagram />,
            href: "",
            id: "3",
        },
        {
            icon: <FaTiktok />,
            href: "",
            id: "4",
        },
    ];

    return (
        <footer className="flex items-center justify-between bg-white border-t-8 border-[#38B6FF] text-zinc-500 rounded-t-2xl mt-16 ">
            <div className="container flex-col md:flex-row  mx-auto flex justify-between items-center py-4">
                <div className="flex-col md:flex-row flex items-center">
                    <a href="" target="_blank" rel="noreferrer">
                        <img
                            src="/Principal zoom.png"
                            alt="Logo"
                            className="w-14"
                        />
                    </a>
                    <p className="text-customGray font-[700] text-lg">
                        @CodandoHub Todos os Direitos Reservados
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    {icons.map((icon) => (
                        <a
                            href={icon.href}
                            key={icon.id}
                            target="_blank"
                            rel="noreferrer"
                            className="text-customGray cursor-pointer text-3xl  hover:text-[#38B6FF] transition-all duration-300"
                        >
                            {icon.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

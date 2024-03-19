"use client";

import { useEffect, useState } from "react";
import { X, AlignJustify } from "lucide-react";

function NavBar() {
    const [menu, setMenu] = useState(false);
    const [showNavBar, setShowNavBar] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            setShowNavBar(!isTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        {
            name: "Automatização",
            id: "1",
            href: "#automatizacao",
        },
        {
            name: "Treinamento",
            id: "2",
            href: "#treinamento",
        },
        {
            name: "Terceirizações",
            id: "3",
            href: "#terceirizações",
        },
        {
            name: "Quem Somos",
            id: "4",
            href: "#quem-somos",
        },
    ];

    return (
        <div
            className={`md:fixed w-full z-20 md:shadow-md transition-all duration-300 ease-in-out ${
                showNavBar ? "" : "hidden"
            }`}
        >
            <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4 shadow-lg">
                <div className="flex justify-between md:mx-[9rem] items-center">
                    <div>
                        <h1 className="text-3xl">
                            Codando<span className="text-[#38B6FF]">Hub</span>
                        </h1>
                    </div>
                    <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
                        {links.map((link) => (
                            <a
                                href={link.href}
                                key={link.id}
                                className={`hover:text-[#38B6FF] cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={` block lg:hidden  shadow-lg  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
                    menu ? " bg-[#38B6FF] py-2" : ""
                } `}
            >
                <div className="flex justify-between mx-[10px]">
                    <div className="flex gap-[50px] text-[16px] items-center select-none">
                        <h1 className="text-3xl">
                            Codando<span className="text-[#38B6FF]">Hub</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-[40px]">
                        {menu ? (
                            <X
                                className="cursor-pointer animate-in fade-in zoom-in text-black"
                                onClick={toggleMenu}
                            />
                        ) : (
                            <AlignJustify
                                className="cursor-pointer animate-in fade-in zoom-in text-[#38B6FF]"
                                onClick={toggleMenu}
                            />
                        )}
                    </div>
                </div>
                {menu ? (
                    <div className="my-8 select-none animate-in slide-in-from-right">
                        <div className="flex flex-col gap-8 mt-8 mx-4">
                            {links.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.id}
                                    className={`hover:text-[#38B6FF] cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default NavBar;

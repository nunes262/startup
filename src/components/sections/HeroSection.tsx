import Image from "next/image";
import React from "react";

function HeroSection() {
    return (
        <section className="flex justify-center flex-col md:flex-row gap-4 items-center h-screen px-4 md:px-[9rem] bg-gradient-to-b from-[#47CBD3] via-[#2070A7] to-[#fff]">
            <div>
                <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
                    Aqqq vai colocar um textin bem dahorinha
                </p>
                <p className="text-[1.375rem] font-[500]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti modi esse nemo quam quasi quis dicta provident
                    accusamus obcaecati eveniet omnis
                </p>
            </div>
            <div>
                <Image
                    src="/logo-fundo.png"
                    alt="imagenzinha bem aleatoria"
                    width={500}
                    height={500}
                />
            </div>
        </section>
    );
}

export default HeroSection;

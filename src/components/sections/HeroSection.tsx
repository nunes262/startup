import React from "react";

function HeroSection() {
    return (
        <section className="flex justify-center flex-col md:flex-row gap-4 items-center h-screen px-4 md:px-[9rem]">
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
                <img
                    src="/"
                    alt="imagenzinha bem aleatoria"
                    className="w-96 h-96"
                />
            </div>
        </section>
    );
}

export default HeroSection;

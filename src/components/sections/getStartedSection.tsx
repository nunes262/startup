import Image from "next/image";
import Header from "../common/Header";

export const GetStartedSection = () => {
    return (
        <section className="flex items-center justify-center flex-col ">
            <div className="flex flex-col items-center justify-center">
                <Image
                    src={"/Principal zoom (1).png"}
                    alt={""}
                    width={400}
                    height={200}
                    className="-mt-2"
                />
                <Header title="Get Started" subtitle="" />
            </div>
            <div className="flex justify-center items-center md:w-1/3">
                <p className="text-customGray font-[700] md:text-center text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque dui mi, bibendum eu erat id, ultricies semper metus.
                    Nunc dapibus laoreet dolor nec imperdiet. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Sequi, quibusdam
                    corporis impedit ducimus facere fuga nemo ex reprehenderit
                    non officiis modi voluptates
                </p>
            </div>
        </section>
    );
};

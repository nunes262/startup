import Header from "../common/Header";

export const TrainingSection = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-4">
            <Header title={"Training"} subtitle={"Our trainings"} />

            <div className="md:w-2/3 flex items-center flex-col md:flex-row justify-between gap-10 mt-8 p-4">
                <img
                    src="/logo.png"
                    alt="imagenzinha bem aleatoria"
                    className="w-96 md:h-[450px] h-96 "
                />
                <div className=" md:w-1/2 flex items-start justify-start flex-col">
                    <p className="text-customGray font-[700] text-justify ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolor necessitatibus eum ipsam ipsa reiciendis
                        assumenda adipisci labore at quaerat a sit laudantium
                        tempore illum qui, ipsum, enim expedita, dolorum
                        debitis.lorem Lorem Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Dolor necessitatibus eum
                        ipsam ipsa reiciendis assumenda adipisci labore at
                        quaerat a sit laudantium tempore illum qui, ipsum, enim
                        expedita, dolorum debitis.lorem Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Pariatur officia aut
                        aspernatur. Quaerat assumenda asperiores dignissimos
                        dicta debitis qui rerum soluta, illum possimus maiores
                        doloremque quos architecto suscipit mollitia
                        corrupti?ipsum dolor sit amet consectetur adipisicing
                        elit. Pariatur officia aut aspernatur. Quaerat assumenda
                        asperiores dignissimos dicta debitis qui rerum soluta,
                        illum possimus maiores doloremque quos architecto
                        suscipit mollitia corrupti?
                    </p>
                </div>
            </div>
        </section>
    );
};

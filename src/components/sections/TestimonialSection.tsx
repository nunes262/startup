import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
    const appReviewData = [
        {
            id: 0,
            imageUrl: "/",
            reviewerName: "Fulano",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, inventore. Atque blanditiis dolorem doloribus, repudiandae accusantium ratione, soluta voluptatem magnam officiis",
        },

        {
            id: 1,
            imageUrl: "/",
            reviewerName: "Ciclano",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, inventore. Atque blanditiis dolorem doloribus, repudiandae accusantium ratione, soluta voluptatem magnam officiis",
        },
        {
            id: 2,
            imageUrl: "/",
            reviewerName: "Beltrano",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, inventore. Atque blanditiis dolorem doloribus, repudiandae accusantium ratione, soluta voluptatem magnam officiis",
        },
        {
            id: 3,
            imageUrl: "/",
            reviewerName: "Sla ja nao sei",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, inventore. Atque blanditiis dolorem doloribus, repudiandae accusantium ratione, soluta voluptatem magnam officiis",
        },
    ];
    return (
        <section className="space-y-16 " id="quem-somos">
            <Header
                title="About Us"
                subtitle="What you need to nknow about us"
            />
            <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
                {appReviewData.map((review) => (
                    <TestimonialCard
                        key={review.id}
                        imageUrl={review.imageUrl}
                        review={review.review}
                        reviewerName={review.reviewerName}
                    />
                ))}
            </div>
            <div className="flex flex-col justify-center items-center">
                <Header title="About our Companny" subtitle="" />
                <p className="text-customGray font-[700] md:text-center text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque dui mi, bibendum eu erat id, ultricies semper metus.
                    Nunc dapibus laoreet dolor nec imperdiet. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Sequi, quibusdam
                    corporis impedit ducimus facere fuga nemo ex reprehenderit
                    non officiis modi voluptates dolores recusandae itaque error
                    soluta voluptatem est ea! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Earum labore dolore eligendi
                    eos, quas quaerat obcaecati, provident ea voluptates
                    quisquam assumenda voluptatibus quibusdam. Ipsum amet eius
                    recusandae et itaque quisquam?
                </p>
            </div>
        </section>
    );
}

export default TestimonialSection;

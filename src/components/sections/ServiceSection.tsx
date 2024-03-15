import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
    const serviceData = [
        {
            id: 0,
            iconUrl: "/",
            title: "Graphic Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
        },
        {
            id: 1,
            iconUrl: "/",
            title: "Software Architect",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
        },
        {
            id: 2,
            iconUrl: "/",
            title: "Back-end Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.",
        },
    ];

    return (
        <section id="terceirizações">
            <Header
                title="service"
                subtitle="Our outsourcing services for you"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
                {serviceData.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        iconUrl={service.iconUrl}
                    />
                ))}
            </div>
        </section>
    );
}

export default ServiceSection;

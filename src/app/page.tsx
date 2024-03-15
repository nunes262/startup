import NavBar from "@/components/common/NavBar";
import { AutomationSection } from "@/components/sections/AutomationSection";
import { Footer } from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { GetStartedSection } from "@/components/sections/getStartedSection";

export default function Home() {
    return (
        <main>
            <NavBar />
            <HeroSection />
            <div className="mt-24 md:mt-2 lg:mt-8 px-4 md:px-[9rem] space-y-36">
                <AutomationSection />
                <TrainingSection />
                <ServiceSection />
                <TestimonialSection />
                <GetStartedSection />
            </div>
            <Footer />
        </main>
    );
}

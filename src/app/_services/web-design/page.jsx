import ServiceHero from "@/components/sections/ServiceHero";
import SideBySideSection from "@/components/sections/SideBySideSection";
import WhyWorkWithUs from "@/components/sections/WhyWorkWithUs";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactForm from "@/components/form/ContactForm";
import { Check } from "lucide-react";

export const metadata = {
    title: "Expert Web Design Services | Timeless Web",
    description: "Custom, responsive web design services helping Sydney businesses grow online.",
};

export default function WebDesignPage() {
    return (
        <main className="w-full">
            <ServiceHero
                title="Expert Web Design Services For Growing Businesses"
                description="At Timeless Web, we build websites that do more than look good. We maximize functionality and drive conversions, turning visitors into loyal customers."
            />

            <SideBySideSection
                className="bg-slate-50 py-32"
                title="Our Website Services"
                description="Available across all our Web Design & Development packages and experiences."
                imageSrc="/services/web-design/team.png"
                imageAlt="Team collaborating on website"
                listItems={[
                    { title: "Clean, Writing to Keep Smart Humans Slick", icon: <Check className="w-4 h-4" /> },
                    { title: "Look Effective and Happy for Clients to your phone", icon: <Check className="w-4 h-4" /> },
                    { title: "Updates that convert browsers into buyers", icon: <Check className="w-4 h-4" /> },
                    { title: "Assets that are better to keep you safe in any country", icon: <Check className="w-4 h-4" /> },
                ]}
            />

            <WhyWorkWithUs className="bg-white py-32" />

            <ProcessSection />

            <FAQSection />

            <div className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 max-w-[1280px]">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-headings font-bold text-gray-900 mb-4">
                            Get A Free Quote
                        </h2>
                        <p className="text-gray-600">Ask us any questions with zero commitment.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-gray-100">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}

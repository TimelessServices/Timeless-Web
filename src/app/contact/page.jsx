import { ContactForm } from "@/components/form/ContactForm";
import { Mail } from "lucide-react";

export const metadata = { title: "Contact Us | TimelessWeb" };

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Banner Section */}
            {/* Double padding as requested: py-24 -> py-48 */}
            <div className="w-full bg-slate-50 py-48 flex items-center justify-center">
                <h1 className="text-black text-5xl md:text-6xl font-bold font-headings">Contact us</h1>
            </div>

            <div className="py-24 px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headings">Lets talk</h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you shortly.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-[#9810fa] mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-gray-600">
                                        connect@timelessweb.com.au
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
}

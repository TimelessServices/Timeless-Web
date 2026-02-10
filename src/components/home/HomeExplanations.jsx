import Button from "../ui/Button";
import { CheckCircle } from "lucide-react";

export function HomeExplanations() {
    return (
        <section className="flex flex-col items-center justify-center py-16 md:py-24 ">
            <div className="w-full max-w-[80%] flex flex-col gap-32 h-auto">
                {/** FIRST ONE START */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content Column */}
                    <div className="flex flex-col gap-6 justify-center lg:pr-8">
                        <h2 className="text-3xl md:text-4xl font-headings font-bold  text-gray-800 text-center lg:text-start">
                            Your Website Should Work While You Sleep
                        </h2>
                        <p className="font-text text-lg text-gray-600 text-center lg:text-start leading-relaxed">
                            It answers questions, filters out time-wasters, and
                            helps visitors understand what you do - without you
                            picking up the phone. You'll get:
                        </p>
                        <ul className="text-base md:text-lg font-text text-gray-600 space-y-3 text-center lg:text-start">
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                More Client Inquiries
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                Less time answering the same questions
                            </li>
                        </ul>

                        <div className="mt-6 text-center lg:text-start">
                            <Button
                                href="/contact"
                                variant="secondary"
                                fullWidth={false}
                                className="text-base px-6 py-3"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                    {/* Image Content Column */}
                    <div className="relative w-full max-h-[500px] flex items-center justify-start">
                        <div className="relative w-full h-full">
                            <img
                                src="/homepage/explanations/salesman.svg"
                                alt="Lady building a website"
                                className="w-full max-h-[500px] h-full object-contain relative z-10"
                            />
                            {/* Decorative background element */}
                            <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 rounded-full blur-3xl opacity-40 lg:opacity-60 -z-0"></div>
                        </div>
                    </div>
                </div>
                {/** SECOND ONE START */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Content Column */}
                    <div className="relative w-full max-h-[450px] flex items-center justify-center order-2 lg:order-1 lg:pr-8">
                        <div className="relative w-full h-full">
                            <img
                                src="/homepage/explanations/outsource.svg"
                                alt="Lady building a website"
                                className="w-full max-h-[450px] h-full object-contain relative z-10"
                            />

                            <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 rounded-full blur-3xl opacity-40 lg:opacity-60 -z-0"></div>
                        </div>
                    </div>
                    {/* Text Content Column */}
                    <div className="flex flex-col gap-6 justify-center lg:pr-8 order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-headings font-bold  text-gray-800 text-center lg:text-start">
                            Spend More Time Doing What You Love.
                        </h2>
                        <p className="font-text text-lg text-gray-600 text-center lg:text-start leading-relaxed">
                            A smart website answers questions, books
                            appointments, and filters out the time-wasters so
                            you only deal with real business. That means:
                        </p>
                        <ul className="text-base md:text-lg font-text text-gray-600 space-y-3 text-center lg:text-start">
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                Less repetitive admin work & stress
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                More time to focus on your business
                            </li>
                        </ul>

                        <div className="mt-6 text-center lg:text-start">
                            <Button
                                href="/contact"
                                variant="secondary"
                                fullWidth={false}
                                className="text-base px-6 py-3"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>

                {/** THIRD ONE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content Column */}
                    <div className="flex flex-col gap-6 justify-center lg:pr-8">
                        <h2 className="text-3xl md:text-4xl font-headings font-bold  text-gray-800 text-center lg:text-start">
                            Look The Part & Earn Their Trust.
                        </h2>
                        <p className="font-text text-lg text-gray-600 text-center lg:text-start leading-relaxed">
                            Your website makes you look established and
                            trustworthy so visitors want to do more business
                            with you.
                        </p>
                        <ul className="text-base md:text-lg font-text text-gray-600 space-y-3 text-center lg:text-start">
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                Make a great first impression
                            </li>
                            <li className="flex items-center justify-center lg:justify-start">
                                <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                                Reflect your brand with a design that feels like
                                you
                            </li>
                        </ul>

                        <div className="mt-6 text-center lg:text-start">
                            <Button
                                href="/contact"
                                variant="secondary"
                                fullWidth={false}
                                className="text-base px-6 py-3"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>

                    {/* Image Content Column */}
                    <div className="relative w-full max-h-[450px] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <img
                                src="/homepage/explanations/brand_image.svg"
                                alt="Lady building a website"
                                className="w-full max-h-[450px] h-full object-contain relative z-10"
                            />

                            <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 rounded-full blur-3xl opacity-40 lg:opacity-60 -z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
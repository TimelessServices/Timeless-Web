import { Star } from "lucide-react";

export function HomeReviews() {
    return (
        <section className="flex flex-col items-center justify-center py-16 bg-slate-50">
            <div className="w-full max-w-[80%] flex flex-col items-center h-auto">
                <div className="flex flex-col gap-8 w-full items-center">
                    <div className="flex flex-col items-center gap-3 mb-10 text-center">
                        <div className="bg-purple-100 text-purple-600 font-semibold text-sm px-4 py-1 rounded-full mb-2">
                            Testimonials
                        </div>
                        <h2 className="font-headings font-bold text-3xl lg:text-4xl text-gray-800">
                            Happy & Satisfied Customers
                        </h2>
                        <p className="font-text text-lg text-center text-gray-600">
                            Here's what some of our satisfied clients have to
                            say about our work
                        </p>
                    </div>

                    {/* Review Box */}
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 max-w-2xl w-full flex flex-col gap-4 border border-gray-100">
                        <div className="text-purple-600 text-4xl leading-none">
                            &quot;
                        </div>
                        <p className="font-text text-gray-600 text-lg leading-relaxed">
                            Working with the team at Timeless Web was an
                            absolute pleasure. They took the time to understand
                            my vision and translated it into a stunning,
                            user-friendly website that exceeded my expectations.
                        </p>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                        <div>
                            <p className="font-headings font-semibold text-gray-900">
                                Harry S.
                            </p>
                            <p className="font-text text-sm text-gray-500">
                                Founder, Paramount Energy Group
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
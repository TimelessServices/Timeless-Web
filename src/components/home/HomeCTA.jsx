import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
    return (
        <section className="flex flex-col items-center justify-center py-32 bg-stone-900 text-white inset-shadow-sm">
            <div className="w-full max-w-[80%] flex flex-col items-center gap-8 h-auto">
                <h2 className="font-headings font-bold text-3xl lg:text-4xl text-center">
                    Let&apos;s Build Something You&apos;re Proud To Share.
                </h2>
                <p className="font-text text-lg text-center  ">
                    Get a clean, modern site built around your vision - with
                    clear communication every step of the way.
                </p>
                <Button
                    href="/contact"
                    className="group text-base px-8 py-4"
                    fullWidth={false}
                >
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </section>
    );
}
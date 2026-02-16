"use client";
import { EbookForm } from "@/components/form/EbookForm";

export default function SmallBusinessGuidePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 py-12 md:py-24">
            <div className="max-w-2xl w-full text-center space-y-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headings text-stone-900 leading-tight">
                    The small business owner&apos;s guide to a website that brings in customers
                </h1>

                <div className="mt-8 w-full">
                    <EbookForm />
                </div>
            </div>
        </div>
    );
}

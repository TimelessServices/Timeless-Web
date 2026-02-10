"use client";
import Button from "../ui/Button";
import ProjectImage from "../ui/ProjectImage";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projectsComplete = [
    {
        name: "Brooklyn Boy Bagels",
        description: "Providing NYC Bagels In Sydney",
        imgSrc: "/homepage/projects/brooklynboybagels.webp",
        colour: "#A90B81",
        key: 1,
        id: "brooklynboybagels",
        link: "https://drive.google.com/file/d/1CJjvEoeFWRW7-iMtdagqc1T85L0tTgxg/view?usp=sharing",
    },
    {
        name: "Beautifool Clinic",
        description: "Beauty salon in Sydney",
        imgSrc: "/homepage/projects/beautifool.webp",
        colour: "#DCA7BD", // Soft pink/rose for beauty salon
        key: 2,
        id: "beautifool",
        link: "https://drive.google.com/file/d/139JDuZCDBMOIA7OnxHcHK8VEWFnE6k34/view?usp=sharing",
    },
    {
        name: "Renowned Dental Care",
        description: "Dental Practice based In Sydney",
        imgSrc: "/homepage/projects/renowneddental.webp",
        colour: "#0B3DA9",
        key: 3,
        id: "renowneddental",
        link: "https://drive.google.com/file/d/1b8xq3wczNdi0r_O_Oy2WGEoHWgaBFXAu/view?usp=sharing",
    },
];

export function HomeWork() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col items-center justify-center bg-slate-50"
        >
            <div className="w-full max-w-[80%] flex flex-col items-center h-auto my-32">
                <div className="flex flex-col gap-8 w-full items-center">
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center gap-2 mb-10"
                    >
                        <div className="bg-purple-100 text-purple-600 font-semibold text-sm px-4 py-1 rounded-full mb-2">
                            Our Work
                        </div>
                        <h2 className="font-headings font-bold text-3xl lg:text-4xl text-center text-gray-800">
                            You&apos;re In Good Hands. Here&apos;s Proof.
                        </h2>
                        <p className="font-text text-lg text-center text-gray-600">
                            We&apos;ve helped businesses of all sizes look
                            professional and grow online.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid pb-4 grid-cols-1 gap-y-12 grid-rows-1 gap-x-4 lg:gap-x-12 xl:grid-cols-3 lg:grid-cols-2 w-full"
                    >
                        {projectsComplete.map((project) => (
                            <motion.div
                                key={project.key}
                                variants={itemVariants}
                                className="h-full"
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full group transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                                >
                                    <div
                                        className={`flex flex-col w-full h-full max-h-[400px] p-8 shadow-xl rounded-2xl`}
                                        style={{ backgroundColor: project.colour }}
                                    >
                                        <ProjectImage project={project} />

                                        <div className="text-white flex flex-col gap mt-4 items-center">
                                            <h4 className="font-bold text-base">
                                                {project.name}
                                            </h4>
                                            <p className="text-sm">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* See More Button */}
                    <motion.div variants={itemVariants} className="mt-8">
                        <Button
                            href="https://drive.google.com/drive/folders/1RuSI9EwLq5z43jWbnRHXwYcJKbMoqrtj?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                            className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                        >
                            See More
                            <ArrowRight className="ml-2 w-4 h-4 inline-block" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
import { Fragment } from "react";
import Image from "next/image";

import { Indicators } from "../interfaces/interfaces";

const experiences = [
    {
        "id": 1,
        "Icon": "./images/experience/virtuo.png",
        "Name": "Virtuo Technologies",
        "TechStacks": [
            {".Net 8": "Novice"},
            {"Microsoft SQL Server": "Novice"},
            {"Postman": "Novice"},
            {"Redis": "Novice"},
            {"AWS": "Novice"},
            {"Umbraco": "Novice"},
            {"Git": "Novice"}
        ],
        "Period": [
            "January, 2024",
            "Present"
        ],
        "Description": "Working as a DotNet Developer for Skywings Airline Application.", // Improve this
    },
    {
        "id": 2,
        "Icon": "./images/experience/larch.png",
        "Name": "Larch Technologies",
        "TechStacks": [
            {".Net 4.5": "Novice"},
            {"React": "Novice"},
            {"JQuery": "Novice"},
            {"Microsoft SQL Server": "Novice"},
            {"Git": "Novice"},
            {"Linear": "Novice"}
        ],
        "Period": [
            "June, 2023",
            "December, 2023"
        ],
        "Description": "Worked as a DotNet Framework Developer for ERP Based Application for Inhouse Project.", // Improve this
    },
    {
        "id": 3,
        "Icon": "./images/experience/Meganar_Logo.png",
        "Name": "Meganar Technologies",
        "TechStacks": [
            {"Spring Boot": "Novice"},
            {"Hibernate": "Novice"},
            {"TailwindCSS": "Intermediate"}
        ],
        "Period": [
            "December, 2022",
            "May, 2023"
        ],
        "Description": "Hired Intern to support and develop features for SmartHRMS Application.", // Improve this
    }

]

const indicators : Indicators = {
    "Novice": "w-2 h-2 bg-lime-300 rounded-full",
    "Intermediate": "w-2 h-2 bg-amber-500 rounded-full",
    "Expert": "w-2 h-2 bg-red-500 rounded-full"
}

export default function Experience() {

    const listexperience = experiences.map( experience =>
        <div key={experience.id} className= {`relative md:static mb-8 block md:flex justify-between items-center w-full right-timeline cursor-grab ${experience.id % 2 == 0 ? "flex-row-reverse" : ""}`}>
            <div className="order-1 w-5/12"></div>
            <div className="hidden md:flex z-20 items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{experience.id}</h1>
            </div>
            <div className="order-1 bg-slate-200 rounded-lg outline-dashed shadow-xl md:w-5/12 px-6 py-4">
                
                <h3 
                    className="mb-3 font-bold text-gray-800 text-lg">
                    
                        <Image
                            src= {experience.Icon}
                            width={32}
                            height={32}
                            alt="Larch" 
                            className="inline mr-3 rounded-full"
                        />
                
                        {experience.Name} 
                
                    <span 
                        className="p-1 inline-block md:inline rounded-md bg-white text-black text-xs mx-3">
                            {experience.Period[0] + " - " + experience.Period[1]}
                    </span>
                
                </h3>
                
                <div className=" flex flex-wrap gap-3 m-3">
                
                    {/* Work on it */}
                        {experience.TechStacks.map(techstack => 
                            <Fragment key={experience.id}>
                            {Object.entries(techstack).map(([tech, level] : [string, string]) => (
                                <div key={tech} className=" flex items-center gap-2 px-2 bg-gray-500 rounded-md text-white">
                                    <p className={indicators[level]}></p>{tech}
                                </div>
                            ))}
                            </Fragment>
                        )}

                </div>

                <p className=" leading-snug tracking-wide text-black text-md">{experience.Description}</p>
            </div>
        </div>
    )

    return (
        <div className="container mx-auto w-full h-full">

            <div className="glamorous mt-10 p-10 border-2 border-blue-600 outline-double outline-emerald-300 rounded-2xl bg-gray-300 ">
                <h1 className="text-2xl font-semibold italic text-center text-slate-900">
                    I&apos;m
                    <span className="ml-3 mr-1 mb-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span className="relative text-white">Mohammed Irfan</span>
                    </span>
                </h1>
                <h2 className="text-xl font-medium italic text-center text-slate-900">
                    Graduated MCA from Thiagarjar College of Engineering
                </h2>
            </div>

            <div className="relative wrap overflow-hidden p-10 h-full">
                
                {/* Timeline Stick */}
                <div className="absolute border-black h-full border left-1/2"></div>
                
                {listexperience}

            </div>
            
        </div>
    );
};

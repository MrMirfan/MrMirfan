import { Console, log } from "console";

const experiences = [
    {
        "id": 1,
        "Name": "Larch Technologies",
        "TechStacks": [
            {".Net Framework": "Novice"},
            {"JQuery": "Novice"},
            {"Microsoft SQL Server": "Novice"}
        ],
        "Period": [
            "June, 2023",
            "December, 2023"
        ],
        "Description": "Worked as a DotNet Framework Developer for ERP Based Application", // Improve this
    },
    {
        "id": 2,
        "Name": "Meganar Technologies",
        "TechStacks": [
            {".Net Framework": "Novice"},
            {"JQuery": "Novice"},
            {"Microsoft SQL Server": "Novice"}
        ],
        "Period": [
            "June, 2023",
            "December, 2023"
        ],
        "Description": "Worked as a DotNet Framework Developer for ERP Based Application", // Improve this
    }

]

const indicators = {
    "Novice": "w-10 h-10 bg-green rounded"
}

export default function Experience() {

    const listexperience = experiences.map(experience =>
        <div key={experience.id} className= {"mb-8 flex justify-between items-center w-full right-timeline " +  (experience.id % 2 == 0 ? "flex-row-reverse" : "")}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{experience.id}</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <div>
                
                {/* Work on it */}
                {/* <ul>
                    {experience.TechStacks.map(techstack => 
                        <li key={experience.id}>
                        {Object.entries(techstack).map(([tech, level]) => (
                            <div key={tech}>
                                <p className={indicators["Novice"]}>: {level}</p>
                            </div>
                        ))}
                    </li>
                    )}
                </ul> */}
                </div>
                <h3 className="mb-3 font-bold text-gray-800 text-xl">{experience.Name} <span className="rounded-sm bg-white text-black opacity-65 text-xs mx-3">{experience.Period[0] + " - " + experience.Period[1]}</span></h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{experience.Description}</p>
            </div>
        </div>
    )

    return (
        <div className="container mx-auto w-full h-full">
            
            <div className="relative wrap overflow-hidden p-10 h-full">
                
                {/* Timeline Stick */}
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                
                {listexperience}

            </div>
            
        </div>
    );
};

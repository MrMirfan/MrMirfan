import { Metadata } from "next";
import Experience from "./components/experience";

export const metadata: Metadata = {
    title: "About Me",
    description: "I need a Job",
};

export default function Careers() {
    return(

        <main>
            <Experience />
        </main>

    );
}
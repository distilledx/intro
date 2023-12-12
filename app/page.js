import Hero from "./components/Hero/hero";
import Projects from "./components/Projects/projects";

export default function Page() {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap"
                rel="stylesheet"
            ></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Source+Serif+4:ital,wght@1,300&display=swap"
                rel="stylesheet"
            ></link>
            <Hero />
            <Projects />
        </>
    );
}

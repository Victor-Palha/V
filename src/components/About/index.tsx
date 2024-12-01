import { Title } from "../Title";

export function About() {
    return (
        <div className="px-6 bg-bg2 bg-[url('/src/assets/about.png')] pb-5">
            <section className="relative">
                <Title title="About Me"/>
                <div className="bg-bg1 rounded-3xl p-5">
                <p className="text-white flex-col font-ibm">
                    <span className="text-brand1 text-sm">&lt;p&gt;</span> <br />
                    <span className="text-brand1 font-semibold text-3xl">Hello There!</span> <br />
                    My name is João Victor Ferreira Palha, like you probably already know. I have 22 years old and I'm a Full-stack Developer with a passion for problem-solving. Since I was a kid, I've always been curious about how things work and how I could make them better. <br />
                    <br />
                    I graduated in Computer Science with 21 years old and now I'm doing a post-graduation in Software Engineering. I always try to learn new things and improve my skills and I have a motto that I always follow: <br />
                    <br />
                    <span className="text-brand1">
                    Programming is not about the language, it's about the logic.  
                    </span> <br />
                    <br />
                    I'm always looking for new challenges and I'm sure that I can help you with your problems. <br />
                    <span className="text-brand1 text-sm">&lt;/p&gt;</span>
                </p>
                </div>
            </section>
        </div>
    )
}
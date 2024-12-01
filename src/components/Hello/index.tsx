import { EnvelopeSimple } from "@phosphor-icons/react";

export function Hello(){
    return (
        <section className="flex flex-col gap-5 items-center">
            <h2 className="text-3xl text-white">
                <span className="text-brand1 text-sm font-ibm">&lt;h1&gt;</span> <br />
                Hello There! <br />
                <span className="font-bold text-brand1">I'm Victor Palha</span>, <br />
                Full-stack Developer <br />
                <span className="text-brand1 text-sm font-ibm">&lt;/h1&gt;</span>
            </h2>

            <p className="text-white font-ibm items-center">
            <span className="text-brand1 text-sm">&lt;p&gt;</span> <br />
                Technologies are just tools. <br />
                What really matters is the <br />
                <span className="text-brand1">problem-solving</span> <br />
                and I'm here to help you with that. <br />
            <span className="text-brand1 text-sm">&lt;/p&gt;</span>
            </p>

            <div className="flex items-center gap-4 text-brand1 font-ibm">
                <h3 className="text-4xl">Let's talk</h3>
                <div className="p-2 rounded-full bg-gray1">
                    <EnvelopeSimple size={30} className="text-brand1"/>
                </div>
            </div>
        </section>
    )
}
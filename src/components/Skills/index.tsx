import { BiLogoJavascript } from "react-icons/bi";
import { Title } from "../Title";
import { Icons } from "./Icons";

export function Skills(){
    return (
        <div className="px-6 bg-bg1 bg-[url('/src/assets/skills.png')] pb-5">
            <section className="relative">
                <Title title="Skills" subtitle="I am striving to never stop learning and improving"/>

                <Icons title="JS" color="#E7A020" icon={<BiLogoJavascript color="white" size={30}/>}/>
            </section>
        </div>
    )
}
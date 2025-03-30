import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiElixir, SiPhoenixframework, SiReact, SiFastify, SiNestjs, SiGraphql, SiGit, SiDocker, SiAmazon, SiLinux, SiPostgresql, SiMongodb, SiRedis, SiSpringboot } from "react-icons/si";
import { Title } from "../Title";
import { Icons } from "./Icons";
import { DiJava } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";

export function Skills() {
  return (
    <div className="px-6 bg-bg1 bg-[url('/src/assets/skills.png')] pb-5">
      <section className="relative">
        <Title title="Skills" subtitle="I am striving to never stop learning and improving" />

        {/* Section for Icons */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          <Icons title="JS" color="js" icon={<BiLogoJavascript color="white" size={30} />} />
          <Icons title="TS" color="ts" icon={<BiLogoTypescript color="white" size={30} />} />
          <Icons title="Elixir" color="elixir" icon={<SiElixir color="white" size={30} />} />
          <Icons title="Java" color="java" icon={<DiJava color="white" size={30}/>}/>
          <Icons title="Phoenix" color="phoenix" icon={<SiPhoenixframework color="white" size={30} />} />
          <Icons title="NestJS" color="nestjs" icon={<SiNestjs color="white" size={30} />} />
          <Icons title="Fastify" color="fastify" icon={<SiFastify color="white" size={30} />} />
          <Icons title="Spring Boot" color="spring" icon={<SiSpringboot color="white" size={30} />} />
          <Icons title="React" color="react" icon={<SiReact color="white" size={30} />} />
          <Icons title="Vue" color="vue" icon={<FaVuejs color="white" size={30} />} />
          <Icons title="GraphQL" color="graphql" icon={<SiGraphql color="white" size={30} />} />
          <Icons title="Git" color="git" icon={<SiGit color="white" size={30} />} />
          <Icons title="Docker" color="docker" icon={<SiDocker color="white" size={30} />} />
          <Icons title="AWS" color="aws" icon={<SiAmazon color="white" size={30} />} />
          <Icons title="Linux" color="linux" icon={<SiLinux color="white" size={30} />} />
          <Icons title="Postgress" color="postgress" icon={<SiPostgresql color="white" size={30} />} />
          <Icons title="MongoDB" color="mongodb" icon={<SiMongodb color="white" size={30} />} />
          <Icons title="Redis" color="redis" icon={<SiRedis color="white" size={30} />} />
        </div>
      </section>
    </div>
  );
}

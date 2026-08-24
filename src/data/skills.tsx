import { ReactNode } from "react";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import {
  SiElixir, SiPhoenixframework, SiReact, SiFastify, SiNestjs, SiGraphql, SiGit,
  SiDocker, SiAmazon, SiLinux, SiPostgresql, SiMongodb, SiRedis, SiSpringboot,
  SiPython, SiOpenai, SiAnthropic, SiGooglegemini, SiLangchain, SiHuggingface,
  SiGithubcopilot, SiN8N, SiVercel,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import { RiCursorFill } from "react-icons/ri";
import { Graph } from "@phosphor-icons/react";
import { SKILL_COLORS } from "../styles/skillColors";

export type Skill = {
  title: string;
  color: keyof typeof SKILL_COLORS;
  icon: ReactNode;
};

export type SkillGroup = {
  label: string;
  hint: string;
  skills: Skill[];
};

const iconProps = { color: "white", size: 30 } as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    hint: "the way I talk to machines",
    skills: [
      { title: "JS", color: "js", icon: <BiLogoJavascript {...iconProps} /> },
      { title: "TS", color: "ts", icon: <BiLogoTypescript {...iconProps} /> },
      { title: "Elixir", color: "elixir", icon: <SiElixir {...iconProps} /> },
      { title: "Java", color: "java", icon: <DiJava {...iconProps} /> },
      { title: "Python", color: "python", icon: <SiPython {...iconProps} /> },
    ],
  },
  {
    label: "AI & Automation",
    hint: "shipping products powered by LLMs",
    skills: [
      { title: "OpenAI", color: "openai", icon: <SiOpenai {...iconProps} /> },
      { title: "Claude", color: "anthropic", icon: <SiAnthropic {...iconProps} /> },
      { title: "Gemini", color: "gemini", icon: <SiGooglegemini {...iconProps} /> },
      { title: "LangChain", color: "langchain", icon: <SiLangchain {...iconProps} /> },
      { title: "Hugging Face", color: "huggingface", icon: <SiHuggingface {...iconProps} /> },
      { title: "RAG", color: "rag", icon: <Graph color="white" size={30} /> },
      { title: "Ollama", color: "ollama", icon: <TbBrain {...iconProps} /> },
      { title: "AI SDK", color: "vercel", icon: <SiVercel {...iconProps} /> },
      { title: "Copilot", color: "copilot", icon: <SiGithubcopilot {...iconProps} /> },
      { title: "Cursor", color: "cursor", icon: <RiCursorFill {...iconProps} /> },
      { title: "n8n", color: "n8n", icon: <SiN8N {...iconProps} /> },
    ],
  },
  {
    label: "Back-end",
    hint: "where the logic lives",
    skills: [
      { title: "Phoenix", color: "phoenix", icon: <SiPhoenixframework {...iconProps} /> },
      { title: "NestJS", color: "nestjs", icon: <SiNestjs {...iconProps} /> },
      { title: "Fastify", color: "fastify", icon: <SiFastify {...iconProps} /> },
      { title: "Spring Boot", color: "spring", icon: <SiSpringboot {...iconProps} /> },
      { title: "GraphQL", color: "graphql", icon: <SiGraphql {...iconProps} /> },
    ],
  },
  {
    label: "Front-end",
    hint: "what the user actually sees",
    skills: [
      { title: "React", color: "react", icon: <SiReact {...iconProps} /> },
      { title: "Vue", color: "vue", icon: <FaVuejs {...iconProps} /> },
    ],
  },
  {
    label: "Data & DevOps",
    hint: "keeping everything running",
    skills: [
      { title: "Postgres", color: "postgress", icon: <SiPostgresql {...iconProps} /> },
      { title: "MongoDB", color: "mongodb", icon: <SiMongodb {...iconProps} /> },
      { title: "Redis", color: "redis", icon: <SiRedis {...iconProps} /> },
      { title: "Docker", color: "docker", icon: <SiDocker {...iconProps} /> },
      { title: "AWS", color: "aws", icon: <SiAmazon {...iconProps} /> },
      { title: "Linux", color: "linux", icon: <SiLinux {...iconProps} /> },
      { title: "Git", color: "git", icon: <SiGit {...iconProps} /> },
    ],
  },
];

const countOf = (label: string) => skillGroups.find((group) => group.label === label)?.skills.length ?? 0;

export const skillsCount = skillGroups.reduce((total, group) => total + group.skills.length, 0);
export const aiSkillsCount = countOf("AI & Automation");
export const languagesCount = countOf("Languages");
export const toolsCount = skillsCount - languagesCount;

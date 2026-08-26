import { ReactNode } from "react";
import {
  SiElixir, SiPhoenixframework, SiReact, SiTypescript, SiJavascript, SiPython,
  SiNodedotjs, SiExpress, SiSpringboot, SiPostgresql, SiMongodb, SiRabbitmq,
  SiKong, SiDocker, SiVuedotjs, SiExpo, SiTailwindcss, SiVite, SiHuggingface,
  SiFfmpeg, SiRender, SiCloudflare, SiJsonwebtokens, SiGoogle,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandReactNative, TbPlugConnected, TbRocket } from "react-icons/tb";

export type Tech = {
  label: string;
  /** Brand color, applied as a tint on the chip so it reads at a glance. */
  color: string;
  icon: ReactNode;
};

const props = { size: 14 } as const;

/**
 * Every technology that can be attached to a project. Chips are rendered from
 * this registry, so a stack is declared by key and never by hand.
 */
export const TECH = {
  elixir: { label: "Elixir", color: "#9B7BD4", icon: <SiElixir {...props} /> },
  phoenix: { label: "Phoenix", color: "#FE6F61", icon: <SiPhoenixframework {...props} /> },
  java: { label: "Java", color: "#E76F51", icon: <DiJava {...props} /> },
  spring: { label: "Spring Boot", color: "#6DB33F", icon: <SiSpringboot {...props} /> },
  python: { label: "Python", color: "#5A9FD4", icon: <SiPython {...props} /> },
  node: { label: "Node.js", color: "#83CD29", icon: <SiNodedotjs {...props} /> },
  express: { label: "Express", color: "#C7C7C7", icon: <SiExpress {...props} /> },
  ts: { label: "TypeScript", color: "#4F9CE8", icon: <SiTypescript {...props} /> },
  js: { label: "JavaScript", color: "#E7A020", icon: <SiJavascript {...props} /> },
  react: { label: "React", color: "#28A9E0", icon: <SiReact {...props} /> },
  reactNative: { label: "React Native", color: "#28A9E0", icon: <TbBrandReactNative {...props} /> },
  vue: { label: "Vue", color: "#41B883", icon: <SiVuedotjs {...props} /> },
  expo: { label: "Expo", color: "#D0D0D0", icon: <SiExpo {...props} /> },
  tailwind: { label: "Tailwind", color: "#38BDF8", icon: <SiTailwindcss {...props} /> },
  vite: { label: "Vite", color: "#B57BFF", icon: <SiVite {...props} /> },
  postgres: { label: "PostgreSQL", color: "#5C9FD8", icon: <SiPostgresql {...props} /> },
  mongo: { label: "MongoDB", color: "#4DB33D", icon: <SiMongodb {...props} /> },
  rabbitmq: { label: "RabbitMQ", color: "#FF6600", icon: <SiRabbitmq {...props} /> },
  kong: { label: "Kong Gateway", color: "#4DD9C0", icon: <SiKong {...props} /> },
  websockets: { label: "WebSockets", color: "#12F7D6", icon: <TbPlugConnected {...props} /> },
  jwt: { label: "JWT", color: "#E86FCB", icon: <SiJsonwebtokens {...props} /> },
  oauth: { label: "OAuth", color: "#E8A33D", icon: <SiGoogle {...props} /> },
  docker: { label: "Docker", color: "#4A9BE8", icon: <SiDocker {...props} /> },
  transformers: { label: "Transformers.js", color: "#FFB300", icon: <SiHuggingface {...props} /> },
  ffmpeg: { label: "FFmpeg", color: "#5CB85C", icon: <SiFfmpeg {...props} /> },
  r2: { label: "R2 / S3", color: "#F6821F", icon: <SiCloudflare {...props} /> },
  render: { label: "Render", color: "#B0B0B0", icon: <SiRender {...props} /> },
  fly: { label: "Fly.io", color: "#9B7BD4", icon: <TbRocket {...props} /> },
} as const satisfies Record<string, Tech>;

export type TechKey = keyof typeof TECH;

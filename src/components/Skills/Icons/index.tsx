import { ReactNode } from "react";

const COLORS = {
    js: "bg-[#E7A020]",
    ts: "bg-[#3178c6]",
    java: "bg-[#007396]",
    vue: "bg-[#41b883]",
    spring: "bg-[#6db33f]",
    elixir: "bg-[#4e2a8e]",
    phoenix: "bg-[#fe6f61]",
    react: "bg-[#28A9E0]",
    fastify: "bg-[#000]",
    nestjs: "bg-[#ea2845]",
    graphql: "bg-[#f6009c]",
    git: "bg-[#f14e32]",
    docker: "bg-[#0040C7]",
    aws: "bg-[#ff8e05]",
    linux: "bg-[#ffb300]",
    postgress: "bg-[#336791]",
    mongodb: "bg-[#13aa52]",
    redis: "bg-[#d82c20]",
  };

type IconsProps = {
    title: string
    color: keyof typeof COLORS
    icon: ReactNode
}

export function Icons({ title, icon, color }: IconsProps){
    const bgColor = COLORS[color] || "";

    return (
        <div className="flex flex-col gap-2 items-center hover:scale-110 transition">
        <div className={`w-14 h-14 flex rounded-full items-center justify-center ${bgColor}`}>
            {icon}
        </div>
        <p className="text-white font-ibm">{title}</p>
        </div>
    )
}
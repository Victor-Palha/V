import { ReactNode } from "react";

type IconsProps = {
    title: string
    color: string
    icon: ReactNode
}
export function Icons({ title, icon, color }: IconsProps){
    return (
        <div className="flex flex-col gap-2 items-center">
        <div className={`w-14 h-14 flex rounded-full items-center justify-center bg-[${color}]`}>
            {icon}
        </div>
        <p className="text-white font-ibm">{title}</p>
        </div>
    )
}
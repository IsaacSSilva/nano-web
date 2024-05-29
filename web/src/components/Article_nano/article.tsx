import { Children, DateContent } from "@/Types/interfaces"
import IconNano from "../nano_icon"

const Base = ({children}:Children) => {
    return (
    <span>
        <IconNano.Min/>

        <div className=" bg-zinc-800 rounded-md shadow-md shadow-zinc-400/20 border border-zinc-400/10 p-5 flex flex-col gap-5" >
            
            {children}

        </div>
    </span>
    )
}

const Content = ({title, message, date_at}: DateContent) => {
    return (
    <>
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-wrap text-sm">
            {message}
        </p>
        <p className="font-extralight text-xs text-right -m-2.5 opacity-65">{date_at}</p>
    </>
        
    )
}

export const article = {
    base: Base,
    content: Content
}
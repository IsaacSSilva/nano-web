import { Children, ChildrenDiv, IcenterBody, ItitleTopics } from "@/Types/interfaces"
import Image from "next/image"

export const Flag = ({children, flag , ...rest}: ChildrenDiv) => {
    return (
        <div title={flag} {...rest} className="px-1.5 py-0.5 text-xs text-center font-light  w-fit h-fit text-zinc-950 rounded-full border border-emerald-400 select-none flex justify-center items-end">
            <span>
                {children}
            </span>
        </div>
    )
}

export const linsten = ({children}: Children) => {
    return (
    <ul className="px-1 mt-2.5 text-zinc-50 md:flex flex-col-reverse w-fit m-auto gap-5 grid  grid-cols-2 max-[375px]:grid-cols-1 grid-flow-row" >
        {children}      
    </ul>
    )
}

export const  topics = ({children}: Children) => {
    return (
    <li className="h-fit max-w-[230px] md:w-fit sm:w-[260px] max-[445px]:w-[160px] max-[375px]:w-[230px] m-auto bg-cover bg-neutral-950/80 p-2.5 md:rounded rounded-md border border-slate-200/10 shadow-md shadow-zinc-200/10 flex flex-col gap-2.5" >
        {children}
    </li>
    )
}



export const titleForTopics = ({children, date_at}: ItitleTopics) => {
    return (
    <span className="flex justify-between text-base font-medium text-center items-center">
        <h3>{children}</h3>
        <span className="font-extralight text-xs text-right opacity-65">{date_at}</span>
    </span>
    )
}

export const centerBody = ({children, flag, height, url_img, width, alt}: IcenterBody) => {
    return (
        <>
            {
                url_img ? (
                    <Image alt={alt ? alt : 'imagem de topico'} src={url_img} width={width} height={height} className="bg-cover" />
                ) : <></>
            }
            
            {/* <Flag flag={flag}>
                {flag}
            </Flag> */}

            <p className="text-sm">
              {children}
            </p>
        
        </>
    )
} 

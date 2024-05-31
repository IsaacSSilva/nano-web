import { Children, ChildrenDiv, IcenterBody, ItitleTopics } from "@/Types/interfaces"
import Image from "next/image"

export const Flag = ({children, flag , ...rest}: ChildrenDiv) => {
    return (
        <div title={flag} {...rest} className="px-1 py-0.5 text-xs font-light bg-emerald-400/80 w-fit h-fit text-zinc-950 rounded-full border border-emerald-400 select-none">
            {children}
        </div>
    )
}

export const linsten = ({children}: Children) => {
    return (
    <ul className="px-1 mt-2.5" >
        {children}
      
    </ul>
    )
}

export const  topics = ({children}: Children) => {
    return (
    <li className="bg-cover bg-neutral-950/80 p-2.5 rounded border border-slate-200/10 shadow-md shadow-zinc-200/10 flex flex-col gap-2.5" >

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
            
            <Flag flag={flag}>
                {flag}
            </Flag>

            <p className="text-sm">
              {children}
            </p>
        
        </>
    )
} 

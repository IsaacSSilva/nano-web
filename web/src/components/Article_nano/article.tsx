import { Children, DateContent } from "@/Types/interfaces"
import IconNano from "../nano_icon"
import Image from 'next/image';
import Link from "next/link";

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

const Content = ({title, message, img, link, date_at}: DateContent) => {
    return (
    <>
        
        <article className="text-wrap text-sm flex flex-col gap-5">
            {
                title ? (
                    <h2 className="font-bold text-2xl">{title}</h2>
                ) : null
            }

            <article>
                {message}
                {
                    link ? (
                        <ul>
                            {
                                link.map((L) => {
                                    return (
                                    <Link key={L.name} href={L.url}>
                                        <li>
                                            {L.name}
                                        </li>
                                    </Link>  
                                    )                              
                                })
                            }
                            
                        </ul>
                    ) : null
                }
            </article>

            {
                img ? (
                    <img src="" alt="" />
                ) : null
            }

        </article>
        <span className="font-extralight text-xs text-right -m-2.5 opacity-65">{date_at}</span>
    </>
        
    )
}

export const article = {
    base: Base,
    content: Content
}
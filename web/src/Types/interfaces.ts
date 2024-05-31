import { ClassAttributes, HTMLAttributes, ReactHTMLElement, ReactNode } from "react";

export interface Children {
    children: ReactNode
}

export interface IcenterBody {
    children: ReactNode,
    flag: string,
    url_img?: string,
    alt?: string
    width?: number,
    height?: number

}

export interface ItitleTopics {
    children: ReactNode,
    date_at: string
}

export interface ChildrenDiv extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    flag: string
}
export interface DateContent {
    title: string, 
    message: string, 
    date_at: string
}

export interface DateNano {
    id: number,
    title: string, 
    mensagem: string, 
    creat_at: string,
    update_at: string
}

export interface Iuser { 
    auth: boolean; 
    user: { 
        name?: string | null | undefined; 
        email?: string | null | undefined; 
        image?: string | null | undefined; 
    } | undefined; 
}
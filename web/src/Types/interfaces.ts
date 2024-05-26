import { ReactNode } from "react";

export interface Children {
    children: ReactNode
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


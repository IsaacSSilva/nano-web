'use client'

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export const singoutFunction = () => signOut()

export const SignOut = () => {
    return (
        <button 
            type="button" 
            onClick={() => {
            signOut()
            }}
            className="
            w-40 h-10 
            md:w-60 md:h-15 md:text-base
            
            text-sm text-zinc-50 bg-zinc-900 rounded cursor-pointer "
        >signOut</button>
    )
}

export const SignOutTwo = () => {
    return (
        <button 
            type="button" 
            onClick={() => {
            signOut()
            }}
            className="
            w-fit py-1 px-0.5             
            text-sm text-zinc-50 bg-red-600 rounded cursor-pointer "
        >
            <LogOut className='size-4'/>
        </button>
    )
}
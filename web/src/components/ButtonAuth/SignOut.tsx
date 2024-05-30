'use client'

import { signOut } from 'next-auth/react';

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
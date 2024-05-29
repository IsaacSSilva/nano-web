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
            className="px-2.5 py-1.5 text-sm text-zinc-50 bg-zinc-900 rounded"
        >signOut</button>
    )
}
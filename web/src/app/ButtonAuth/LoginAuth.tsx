'use client'

import { signIn } from "next-auth/react"

export const LoginAuth = () => {
    return (
        <button 
        onClick={() => {
          signIn('github', { callbackUrl: '/dashnano' } )
          
        }}
        type="button" 
        className="px-2.5 py-1.5 text-sm text-zinc-50 bg-zinc-900 rounded"
        >auth github
      </button>
    )
}
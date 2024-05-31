'use client'

import { signIn } from "next-auth/react"

export const LoginAuth = () => {
    return (
        <button 
        onClick={() => {
          signIn('github', { callbackUrl: '/dashnano' } )
          
        }}
        type="button" 
        className="
        w-40 h-10 
        md:w-60 md:h-15 md:text-base
        
        text-sm text-zinc-50 bg-zinc-900 rounded cursor-pointer "
        >auth github
      </button>
    )
}

export const LoginAuthTwo = () => {
  return (
      <button 
      onClick={() => {
        signIn('github', { callbackUrl: '/nanox' } )
        
      }}
      type="button" 
      className="
      size-fit p-1
      bg-emerald-500
      hover:bg-emerald-600/90

      transition-all
      duration-150
      
      text-sm text-zinc-950 rounded cursor-pointer "
      >auth
    </button>
  )
}
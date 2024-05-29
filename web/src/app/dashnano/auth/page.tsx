'use client'

import { signIn } from "next-auth/react"


export default function auth() {

  return (

    <main className="flex w-full h-screen bg-slate-200 justify-center items-center ">
      
      <button 
        onClick={() => {
          signIn('github', { callbackUrl: '/dashnano' } )
          
        }}
        type="button" 
        className="px-2.5 py-1.5 text-sm text-zinc-50 bg-zinc-900 rounded"
        >auth github
      </button>

    </main>
  )
}
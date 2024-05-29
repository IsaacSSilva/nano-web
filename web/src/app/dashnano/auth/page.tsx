import { redirect } from 'next/navigation.js'

import { getServerSession } from 'next-auth'
import { LoginAuth } from '@/app/ButtonAuth/LoginAuth'

export default async function Login() {

  const session = await getServerSession()

  if(session){
    return redirect('https://github.com/IsaacGSS/API_Frete/blob/main/server/tsconfig.json')
  }

  return (

    <main className="flex w-full h-screen bg-slate-200 justify-center items-center ">
      
      <LoginAuth />

    </main>
  )
}
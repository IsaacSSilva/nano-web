import { getServerSession } from 'next-auth';
import { LoginAuth } from '../../../components/ButtonAuth/LoginAuth';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { NanoSkewmin } from '../../../components/nano_icon/nano-dublue-skew';

export default async function Auth() {

  const session = await getServerSession()

  if(session){
    return redirect('/dashnano')
  }

  return (

    <main className="flex flex-col w-full h-screen bg-slate-200 justify-center items-center ">
      <div className='size-fit md:ml-[435px] ml-[300px] md:mb-[10px]'>
        <NanoSkewmin />
      </div>
      <div className='
      md:w-[380px] md:h-[300px]

      w-60 h-80 flex flex-col justify-around items-center border-2 border-zinc-950 rounded-s-xl rounded-br-xl 
      '>

        <Image
        src="/github-mark.svg"
        alt="Picture of the author"
        width={120}
        height={120}
        className='size-[120px]'
      />
      
          <LoginAuth />
        </div>
      

    </main>
  )
}
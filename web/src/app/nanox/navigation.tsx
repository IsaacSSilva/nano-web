import { authAutozrization } from "../api/auth/session"
// import { Navigation } from '../../components/nav/navigation';
import Image from 'next/image';
import { SignOutTwo } from "@/components/ButtonAuth/SignOut";
import { User } from "lucide-react";
import { LoginAuthTwo } from "@/components/ButtonAuth/LoginAuth"; 


// export const Menu = async () => {

//     const auth = await authAutozrization()

//     return (
//         <>
//             {
//                 auth ? (
//                     <Navigation.root>
//                         <Navigation.loging.menu />
//                         <Navigation.loging.user user={auth}/>
//                     </Navigation.root>

//                 ) : (
//                     <Navigation.root>
//                         <Navigation.noLoging.menu />
//                         <Navigation.noLoging.user />
//                     </Navigation.root>
//                 )

//             } 
//         </>
        
//     )
// }

export const MenuBetaTeste = async () => {

  const auth = await authAutozrization()

  return (
    <article className="personColorTestNav hidden lg:col-span-1 lg:flex h-screen  pb-2.5  flex-col gap-5 justify-center items-center text-sm text-zinc-50 ">
          <div className="h-full min-w-full px-3">

          <p className="m-auto py-2.5 text-base font-black"> 
          {
            auth ? (
              <>
                Ola <strong className="text-rose-600 text-2xl font-thin">Dev</strong>
              </> 
            ) : (
              <>
                Seja <strong className="text-rose-600 text-2xl font-thin">Bem-Vindo</strong>
              </>
            )
          }
          </p>
          
          <nav title="nav root from User comun" className=" mb-16">
            <span>From User comun:</span>
              <ul className="flex flex-col gap-2.5 text-lg ml-1.5">
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/dashnano">
                  <li>Projetos</li>
                </a>
                <a href="/dashnano/auth">
                  <li>
                    Desafios
                  </li>
                </a>
                <a href="/dashnano/auth">
                  <li>
                    Progresso
                  </li>
                </a>
                <a href="/dashnano/auth">
                  <li>
                    Blog
                  </li>
                </a>
                <a href="/dashnano/auth">
                  <li>
                    Sobre
                  </li>
                </a>
              </ul>
            </nav>

            {
              auth ? (
                <nav title="nav root from developer" className="space-y-3 mb-5">
                <span>From Developer:</span>
                  <ul className="flex flex-col gap-2.5 font-mono text-lg ml-1.5">
                    <a href="/">
                      <li>root</li>
                    </a>
                    <a href="/dashnano">
                      <li>Dashnano</li>
                    </a>
                    <a href="/dashnano/auth">
                      <li>
                        auth
                      </li>
                    </a>
                  </ul>
                </nav>
              ) : null
            }
          
          </div>

          <div className="w-full px-2 py-2.5 flex md:gap-5 md:justify-normal justify-between items-center">

            {
              auth ? (
                <Image 
                alt={auth.user?.name ?? ''} 
                src={auth.user?.image ?? '/github-mark.svg'} 
                width={50} 
                height={50}
                className="rounded-full"
                />
                ) : (
                <User className="size-10 p-1 rounded-full bg-zinc-500 text-zinc-50"/>
              )
            } 
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-center px-1">
                <p className="italic">{auth ? auth.user?.name : <>Anonimo</>}</p>
                { auth ? <SignOutTwo/> : <LoginAuthTwo/>}
              </div>
                <p className="font-thin text-xs text-zinc-50/40">{auth ? auth.user?.email : <>Faca login com Github</>}</p>
            </div>
                        
            
          </div>
            
          </article>
  )
}
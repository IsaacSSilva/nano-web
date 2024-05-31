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
        <>
            <article className="flex flex-col gap-5 justify-center items-center text-sm text-zinc-50 lg:bg-zinc-800/10">
        {       // Teste em producao
          auth ? (

            <>
            <div className="h-full">
            <p className="m-auto py-2.5 text-base font-black"> Ola <strong className="text-rose-600 text-2xl font-thin">Dev</strong> , ao <strong className="text-rose-600 text-2xl font-thin">nano X</strong></p>
            
            <nav title="nav root from User comun" className="space-y-3 mb-16">
              <span>From User comun:</span>
                <ul className="flex flex-col gap-2.5 text-lg">
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
            
            <nav title="nav root from developer" className="space-y-3 mb-5">
              <span>From Developer:</span>
                <ul className="flex flex-col gap-2.5 font-mono text-lg">
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

            </div>

            <div className="w-full px-2 py-2.5 flex justify-between items-center">
              

                            
              <Image 
              alt={auth.user?.name ?? ''} 
              src={auth.user?.image ?? '/github-mark.svg'} 
              width={50} 
              height={50}
              className="rounded-full"
              />

              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center px-1">
                  <p className="italic">{auth.user?.name}</p>
                  <SignOutTwo/>
                </div>
                  <p className="font-thin text-xs">{auth.user?.email}</p>
              </div>
            </div>
             
            </>
            
          ) : (
            <>
            <div className="h-full">
            <p className="m-auto py-2.5 text-base font-black"> Bem-Vindo ao <strong className="text-rose-600 text-2xl font-thin">nano X</strong></p>
            
            <nav className="space-y-3 mb-16">
                <ul className="flex flex-col gap-2.5 text-lg">
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
            

            </div>

            <div className="w-full px-2 py-2.5 flex justify-between items-center">
              

              <User className="size-10 p-1 rounded-full bg-zinc-500 text-zinc-50"/>

              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-center px-1">
                  <p className="italic">Anonimo</p>
                  <LoginAuthTwo/>
                </div>
                  <p className="font-thin text-xs text-zinc-50/40">Faca login com Github.</p>
              </div>

            </div>
             
            </>
          )
        }
      </article>
        </>
        
    )
}
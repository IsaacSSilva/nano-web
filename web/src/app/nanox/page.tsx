import Link from "next/link";
import Render from "./renderContent";
import Header from '../../components/Header/index';
import IconNano from "@/components/nano_icon";
import Note from "@/components/Note";
import { authAutozrization } from "../api/auth/session";
import Image from 'next/image';
import { SignOutTwo } from "@/components/ButtonAuth/SignOut";
import { User } from "lucide-react";
import { LoginAuthTwo } from "@/components/ButtonAuth/LoginAuth";
// import { Menu } from './navigation' em prosimas atualizacoes;


export default async function NanoX() {

  const auth = await authAutozrization()
  
  return (

    <section className=" max-w-7xl min-h-screen m-auto mx-40 grid grid-cols-5 gap-10">
      
      <article className="flex flex-col gap-5 justify-center items-center text-sm text-zinc-50 lg:bg-zinc-800/10">
        {/* {       // Teste de bug em producao
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
        } */}
      </article>
      
      <main className="
      col-span-3 border-x border-zinc-300/10
      lg:max-w-[51rem] md:max-w-[32rem] max-w-96 min-h-full text-neutral-50  p-5 ">

        <Render />

      </main>

      
      <Header.root>
        <Header.top>
          <h1 className="text-center text-4xl font-thin text-zinc-200">nano X</h1>
          <Link href={'/dashnano'}>
            <IconNano.N/>
          </Link>
        </Header.top>

        <Header.body>

         

          <Note.root>
            Bem-vindo ao 'nano X', nao perca tempo, Explore!.
          </Note.root>
          
          <h2 className="text-xl font-light">
            Topicos:
          </h2>

        <Header.linsten>
          <Header.topics.root>


              <Header.topics.title date_at="20/05">
               Relogio digital - Web
              </Header.topics.title>

              
              <Header.topics.body
                flag="estudo"
                url_img="https://raw.githubusercontent.com/IsaacGSS/relogio_digital/main/md/vid/2022-08-02-16-05-59.gif"
                alt="Relogio Digital gif"
                width={360}
                height={360}
              >
                Um pequena aplicacao que foi dado um fork e eu ajudei a deixar reesponsivo.
              </Header.topics.body>

          </Header.topics.root>
        </Header.linsten>


        </Header.body>

        
      </Header.root>
    </section>

    

  )
}
import Link from "next/link";
import Render from "./renderContent";
import Header from '../../components/Header/index';
import IconNano from "@/components/nano_icon";
import Note from "@/components/Note";

// import { Menu, MenuBetaTeste } from './navigation';em prosimas atualizacoes;
import { MenuBetaTeste } from './navigation';


export default function NanoX() {

  return (

    <section className=" max-w-7xl min-h-screen m-auto mx-40 grid grid-cols-5 gap-10">
      
      <MenuBetaTeste />
      
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
            Bem-vindo ao &apos;nano X&apos;, nao perca tempo, Explore!.
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
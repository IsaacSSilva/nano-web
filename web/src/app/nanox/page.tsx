import Link from "next/link";
import Render from "./renderContent";
import Header from '../../components/Header/index';
import IconNano from "@/components/nano_icon";
import Note from "@/components/Note";

// import { Menu, MenuBetaTeste } from './navigation';em prosimas atualizacoes;
import { MenuBetaTeste } from './navigation';
import { Topics } from './topics';


export default function NanoX() {

  return (

    <section className=" max-w-[1480px] m-auto min-h-screen  
    md:grid md:grid-cols-4
    lg:gap-5
    md:gap-2.5
    gap-5
    flex flex-col-reverse
    ">
      
      <MenuBetaTeste />
      
      <main className=" border-x border-zinc-300/10 max-w-full max-h-screen overflow-y-scroll text-neutral-50  p-5 

       md:col-span-2
      lg:col-span-2  

      scrollPerson
      ">
        <Render />

      </main>

      
      <Header.root>
        <Header.top>
          <h1 className="text-center text-4xl font-thin text-zinc-200">nano X</h1>
          <Link href={'/dashnano'}>
            <IconNano.N/>
          </Link>
        </Header.top>

        {/* <Note.root>
          Bem-vindo ao &apos;nano X&apos;, nao perca tempo, Explore!.
        </Note.root> */}

        <Header.body>

          <Topics />

        </Header.body>

        
      </Header.root>
    </section>

    

  )
}
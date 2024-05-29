import IconNano from "../components/nano_icon";
import Header from '../components/Header/index';
import Render from "./renderContent";
import Link from "next/link";

export default function Home() {

  return (

    <main className="bg-zinc-950 w-full min-h-screen">
    <Header.base>
      <h1 className="text-center text-4xl font-thin text-zinc-200 sm:hidden block">nano</h1>
        <Link href={'/dashnano'}>
          <IconNano.N/>
        </Link>
      </Header.base>
        
      
      <section className="lg:max-w-[51rem] md:max-w-[32rem] max-w-96 min-h-full text-neutral-50 m-auto py-14 ">

        <Render />

      </section>
    </main>

    

  )
}

import Nano from "../components/nano_icon";
import Header from '../components/Header/index';
import Render from "./renderContent";

export default function Home() {

  return (

    <>

    <Header.base>
      <h1 className="text-center text-4xl font-thin text-zinc-200">nano</h1>

      <Nano.Skew/>
    </Header.base>   
    
    <main className="lg:max-w-[51rem] md:max-w-[32rem] max-w-96 min-h-screen h-full text-neutral-50 m-auto py-14 ">

      <Render />

    </main>
    </>

    

  )
}

import ArticleNano from "@/components/Article_nano";
import { DateNano } from "@/Types/interfaces";
import { time_revalidating, url_api } from "@/utils/env_validation";
import { Vazio } from '../components/mensagemVazia/vazio';
import { formattedDate } from "@/utils/validateDate";


async function getData() {
    const res = await fetch(url_api.mensagens, { next: { revalidate: time_revalidating } })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Render() {
    const render = await getData()   

    return (
        <>
        {

            render[0] 
            ? 
            (
                render.map((render: DateNano) => {
                    return (
                        <ArticleNano.base key={render.id}>
                            <ArticleNano.content key={render.id} date_at={formattedDate(render.creat_at)} title={render.title} message={render.mensagem} />
                        </ArticleNano.base> 
                    )
                    
                })
            ) :
            (
                <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-5 text-zinc-400">
                    <Vazio />
                </div>
            )
            
        }
        </>
        
    )
  }
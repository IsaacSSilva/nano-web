import { get } from "@/api/get-nano";
import ArticleNano from "@/components/Article_nano";
import { DateNano } from "@/Types/interfaces";
import axios from "axios";

export default async function Render() {


    const getInfoNano = await axios({
        method: "get",
        url: process.env.URL_KEY_API ? (process.env.URL_KEY_API + 'mensagens/') : "http://localhost:3333/mensagens/",
    }).then((response) => {

        const render: any = []        
        
        response.data.map((e: DateNano) => {
            render.push(e)
        })

        return render    
    })     

    

    return (
        <>

        {
            getInfoNano.map((render: DateNano) => {
                return (
                <ArticleNano.base key={render.id}>
                    <ArticleNano.content key={render.id} date_at={render.creat_at} title={render.title} message={render.mensagem} />
                </ArticleNano.base> 
                )
                
            })
        }
            
        </>
    )


}
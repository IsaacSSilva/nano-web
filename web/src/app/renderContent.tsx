import ArticleNano from "@/components/Article_nano";
import { DateNano } from "@/Types/interfaces";
import { url_api } from "@/utils/url-api";
import axios from "axios";


async function getData() {
    const res = await fetch(url_api.mensagens)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Render() {
    const render = await getData()    
   
    return (
        <>
        {
            
            render.map((render: DateNano) => {
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


// export async function getRender() {
//     const dataRender = await axios({
//         method: "get",
//         url: url_api.mensagens,
//     }).then((response) => {

//         const render: any = []        
        
//         response.data.map((e: DateNano) => {
//             render.push(e)
//         })

//         return render    
//     })     

//     return dataRender
// }

// export async function R() {

//     const render = await getRender()    

//     return (
//         <>

//         {
//             render.map((render: DateNano) => {
//                 return (
//                 <ArticleNano.base key={render.id}>
//                     <ArticleNano.content key={render.id} date_at={render.creat_at} title={render.title} message={render.mensagem} />
//                 </ArticleNano.base> 
//                 )
                
//             })
//         }
            
//         </>
//     )


// }
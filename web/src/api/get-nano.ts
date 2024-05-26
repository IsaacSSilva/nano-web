import { DateNano } from "@/Types/interfaces";
import axios from "axios";

export const get = async () => {
    const render = await axios({
        method: "get",
        url: "http://localhost:3333/mensagens/",
    }).then((response) => {

        const render: any = []        
        
        response.data.map((e: DateNano) => {
            render.push(e)
        })

        return render    
    })  
    
    return render
}

      

    
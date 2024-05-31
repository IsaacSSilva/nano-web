import { getServerSession } from "next-auth";
import getData from "../http/get";

export async function session() {

    const session = await getServerSession()
    
    return session
}


export async function authAutozrization() {

const session = await getServerSession()
    
  if(!session){
    return false
  }

  const adm = await getData() 
  
  if(session.user?.email != adm[0]?.email){ 

    const auth = {
        auth: true,
        user: session.user
    }
    
    return auth
  }


}
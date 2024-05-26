import { Children } from "@/Types/interfaces"

export const HeaderBase = ({children}: Children) => {
    return (
    <header className=" flex m-auto max-w-96 items-center py-12 gap-5 justify-center" >

      
      <div className="max-w-96 inline-flex gap-10 justify-center items-center">
      
      {children}

      

      </div>    

    </header>
    )
}
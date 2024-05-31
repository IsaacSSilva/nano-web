import { Children } from "@/Types/interfaces"


export const top = ({children}: Children) => {
    return (
      <div className="max-w-96 inline-flex gap-10 justify-center items-center text-center">
        {children}
      </div>    
    )
}
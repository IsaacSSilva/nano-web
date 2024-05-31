import { Children } from "@/Types/interfaces"

export const root = ({children}: Children) => {
    return (
    <header className="pt-12 min-h-screen min-w-80  flex flex-col gap-5 items-center justify-start" >

      
        {children}
      

    </header>
    )
}
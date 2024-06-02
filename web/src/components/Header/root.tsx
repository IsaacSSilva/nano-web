import { Children } from "@/Types/interfaces"

export const root = ({children}: Children) => {
    return (
    <header className=" personColorTestHeader  lg:col-span-1 md:col-span-2 pt-12 max-h-screen flex flex-col gap-5 items-center justify-between" >

      
        {children}
      

    </header>
    )
}
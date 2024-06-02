import { Children } from "@/Types/interfaces"

export const body = ({children}: Children) => {
    return (
    <section className="flex flex-col w-full h-fit min-h-[80vh] max-h-[0vh] overflow-auto my-5 p-5 scrollPerson
    
    before:content-['Topicos:']
    before:text-xl 
    before:font-light
    before:absolute
    before:-translate-y-16
    " >

        {children}
      
    </section>
    )
}
import { Children } from "@/Types/interfaces"

export const body = ({children}: Children) => {
    return (
    <section className="flex flex-col w-full h-fit max-h-[80vh] overflow-auto my-5 p-5
    " >

        {children}
      
    </section>
    )
}
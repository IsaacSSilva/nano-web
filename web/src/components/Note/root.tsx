import { Children } from "@/Types/interfaces"

export const root = ({children}: Children) => {
    return (
    <article className="my-5 py-2 pl-1 pr-2.5 text-sm tracking-wider
    font-light bg-zinc-500/50 rounded w-fit m-auto text-justify
    border-l-4 border-emerald-600 overflow-hidden
    ">
      <p>
        {children}
      </p>
    </article>
    )
}
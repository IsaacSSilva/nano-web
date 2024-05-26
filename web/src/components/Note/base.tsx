import { Children } from "@/Types/interfaces"

export const NoteBase = ({children}: Children) => {
    return (
        <div className="px-2.5 py-0.5 mt-14 mb-5 text-sm tracking-wider font-light bg-zinc-500/50 rounded w-fit m-auto text-center overflow-hidden border-l-4 border-zinc-500">
      <p>
        {children}
      </p>
    </div>
    )
}
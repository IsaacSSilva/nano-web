export const NanSkew = () => {
    return (
      <div className="
      size-20 bg-rose-800/95 rounded-md -skew-y-[10deg] -skew-x-[5deg]
      before:flex before:items-center before:justify-center before:-m-1 before:absolute before:-inset-1 before:size-20 before:rounded-md before:text-center before:text-zinc-950 before:text-3xl before:font-thin before:bg-rose-700/90 
      after:flex after:items-center after:justify-center after:-m-3 after:absolute after:-inset-1 after:size-20 after:rounded-md after:text-center after:text-zinc-950 after:text-7xl after:font-bold after:bg-rose-600
      
      before:content-['nano']
      after:content-['N']

      hover:after:translate-x-[-1.8rem]

      before:hover:translate-x-[4.2rem]
      before:transition-transform
      before:duration-500
      before:ease-out
      before:delay-100
  
      after:transition-transform
      after:duration-[550ms]
      after:ease-out
      after:delay-200

      " >
      </div>
    )
}

// before:overflow-hidden
// hover:before:w-[160px]

export const NanoSkew = () => {
  return (
    <div className=" shadow shadow-emerald-800/80
    size-20 bg-emerald-800/95 rounded-md -skew-y-[10deg] -skew-x-[5deg] 
    before:flex before:items-center before:justify-center before:-m-1 before:absolute before:-inset-1 before:size-20 before:rounded-md before:text-center before:text-zinc-950 before:text-2xl before:tracking-tighter hover:before:tracking-widest before:font-thin before:bg-emerald-700/90 
    after:flex after:items-center after:justify-center after:-m-3 after:absolute after:-inset-1 after:size-20 after:rounded-md after:text-center after:text-zinc-950 after:text-7xl after:font-bold after:bg-emerald-600
    
    before:shadow before:shadow-emerald-700/75
    after:shadow after:shadow-emerald-600/60

    before:content-['string']
    after:content-['G']

    hover:after:translate-x-[-1rem]
    hover:after:translate-y-[-0.7rem]

    before:hover:translate-x-[4.2rem]
    before:hover:translate-y-[0.5rem]

    before:transition-all
    before:duration-700
    before:ease-out
    before:delay-150

    after:transition-all
    after:duration-[550ms]
    after:ease-out
    after:delay-[250ms]

    " >
      S
    </div>
  )
}

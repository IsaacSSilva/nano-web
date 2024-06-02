import { Children } from '../../Types/interfaces';

export const root = async ({children}: Children) => {

    return (
        <article className=" fixed flex flex-col gap-5 justify-center items-center text-sm text-zinc-50 lg:bg-zinc-800/10">
            {children}
        </article>
    )
}
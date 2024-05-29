export const url_api = {
    mensagens: process.env.URL_KEY_API ? (process.env.URL_KEY_API + 'mensagens/') : "http://localhost:3333/mensagens/",
    root: process.env.URL_KEY_API ? process.env.URL_KEY_API : "http://localhost:3333/",
    adm: process.env.URL_KEY_API ? (process.env.URL_KEY_API + 'user/adm') : "http://localhost:3333/user/adm",
} 

export const time_revalidating = process.env.TIME_REVALIDATING ? Number(process.env.TIME_REVALIDATING) : 30

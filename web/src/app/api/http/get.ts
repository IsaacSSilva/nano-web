import { time_revalidating, url_api } from "@/utils/env_validation";

async function getMensagens() {
    const res = await fetch(url_api.mensagens, { next: { revalidate: time_revalidating } })
   
    if (!res.ok) {
    throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getTopics() {
    const res = await fetch(url_api.topics, { next: { revalidate: time_revalidating } })
   
    if (!res.ok) {
    throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getAdimin() {
    const res = await fetch(url_api.adm, { next: { revalidate: time_revalidating } })
   
    if (!res.ok) {
    throw new Error('Failed to fetch data')
    }

    return res.json()
}

const getData = {
    mensagens: getMensagens,
    topics: getTopics,
    adm: getAdimin
}

export default getData
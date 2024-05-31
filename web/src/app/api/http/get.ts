import { time_revalidating, url_api } from "@/utils/env_validation";

async function getData() {
    const res = await fetch(url_api.mensagens, { next: { revalidate: time_revalidating } })
   
    if (!res.ok) {
    throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default getData
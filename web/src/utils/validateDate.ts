export const formattedDate = (update: string, creat: string ) => {

    const update_at = new Date(update)

    const creat_at = new Date(creat) //.toLocaleDateString('pt-BR')
    const dateNew = new Date() //.toLocaleDateString('pt-BR')

    const day = creat_at.getDate().toString().padStart(2, '0')
    const month = (creat_at.getMonth() + 1).toString().padStart(2, '0')

    const date = (day + '/' + month)

    if (creat_at.getDate() == dateNew.getDate()) {
        if (creat_at != update_at) {
            return 'today - ' + new Date(update).toLocaleTimeString('pt-BR').slice(0, -3) + ' edit.'
        }
        const today = ('today - ' + creat_at.toLocaleTimeString('pt-BR').slice(0, -3) + '.')
        return today
    }
    if (creat_at.getDate() == dateNew.getDate() + 1) {
        if (creat_at != update_at) {
            return 'yesterday - ' + new Date(update).toLocaleTimeString('pt-BR').slice(0, -3) + ' edit.'
        }
        const yesterday = ('yesterday - ' + creat_at.toLocaleTimeString('pt-BR').slice(0, -3) + '.')
        return yesterday
    }
    if (creat_at != update_at) {
        new Date(update).toLocaleTimeString('pt-BR').slice(0, -3) + ' edit.'
    }

    return date
} 
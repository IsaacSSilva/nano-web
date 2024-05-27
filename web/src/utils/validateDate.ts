export const formattedDate = (dateString: string) => {

    const dataMensagem = new Date(dateString) //.toLocaleDateString('pt-BR')
    const dateNew = new Date() //.toLocaleDateString('pt-BR')

    const day = dataMensagem.getDate().toString().padStart(2, '0')
    const month = (dataMensagem.getMonth() + 1).toString().padStart(2, '0')

    const date = (day + '/' + month)

    if (dataMensagem.getDate() == dateNew.getDate()) {
        const today = ('today - ' + dataMensagem.toLocaleTimeString('pt-BR').slice(0, -3) + '.')
        return today
    }
    if (dataMensagem.getDate() == dateNew.getDate() + 1) {
        const yesterday = ('yesterday - ' + dataMensagem.toLocaleTimeString('pt-BR').slice(0, -3) + '.')
        return yesterday
    }

    return date
} 
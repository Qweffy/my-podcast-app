export const formatDuration = (millis: number): string => {
    const hours = Math.floor(millis / 3600000)
    const minutes = Math.floor((millis % 3600000) / 60000)
    const seconds = Math.floor((millis % 60000) / 1000)

    const formattedHours = hours > 0 ? `${hours}:` : ''
    const formattedMinutes = hours > 0 ? minutes.toString().padStart(2, '0') : minutes.toString()
    const formattedSeconds = seconds.toString().padStart(2, '0')

    return `${formattedHours}${formattedMinutes}:${formattedSeconds}`
}

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString().slice(-2)
    return `${day}/${month}/${year}`
}

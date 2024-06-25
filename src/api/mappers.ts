import { Podcast } from 'types/Podcast'

export interface MappedPodcast {
    id: string
    title: string
    author: string
    imageURL: string
}

export const mapPodcast = (podcast: Podcast): MappedPodcast => ({
    id: podcast.id.attributes['im:id'],
    title: podcast['im:name'].label,
    author: podcast['im:artist'].label,
    imageURL: podcast['im:image'][2]?.label || '',
})

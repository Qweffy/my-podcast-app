import { MappedPodcast, Podcast } from 'types/Podcast'

export const mapPodcast = (podcast: Podcast): MappedPodcast => ({
    id: podcast.id.attributes['im:id'],
    title: podcast['im:name'].label,
    author: podcast['im:artist'].label,
    imageURL: podcast['im:image'][2]?.label || '',
    description: podcast.summary.label,
})

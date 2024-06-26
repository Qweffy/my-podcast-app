import { MappedPodcast } from 'types/Podcast.ts'

export const filterPodcasts = (podcasts: MappedPodcast[], filter: string): MappedPodcast[] => {
    return podcasts.filter(
        (podcast) =>
            podcast.title.toLowerCase().includes(filter.toLowerCase()) ||
            podcast.author.toLowerCase().includes(filter.toLowerCase()),
    )
}

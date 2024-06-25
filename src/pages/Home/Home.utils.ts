import { Podcast } from 'types/Podcast.ts'

export const filterPodcasts = (podcasts: Podcast[], filter: string): Podcast[] => {
    return podcasts.filter(
        (podcast) =>
            podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase()) ||
            podcast['im:artist'].label.toLowerCase().includes(filter.toLowerCase()),
    )
}

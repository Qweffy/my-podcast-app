import { useQuery } from '@tanstack/react-query'
import { fetchPodcastEpisodes } from 'api/episodes.ts'
import { MappedEpisode } from 'types/Podcasts.ts'

export const usePodcastDetails = (podcastId: string) => {
    return useQuery<MappedEpisode[]>({
        queryKey: ['podcastDetails', podcastId],
        queryFn: async () => {
            const episodes = await fetchPodcastEpisodes(podcastId)
            console.log(`Fetched episodes for podcastIdAEGEWGHQ: ${podcastId}`, episodes)
            return episodes
        },
        enabled: !!podcastId,
        staleTime: 24 * 60 * 60 * 1000,
    })
}

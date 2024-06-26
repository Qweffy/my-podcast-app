import { useQuery } from '@tanstack/react-query'
import { fetchPodcastEpisodes } from 'api/episodes.ts'
import { MappedEpisode } from 'types/Podcasts.ts'

export const usePodcastDetails = (podcastId: string) => {
    return useQuery<MappedEpisode[]>({
        queryKey: ['podcastDetails', podcastId],
        queryFn: () => fetchPodcastEpisodes(podcastId),
        enabled: !!podcastId,
        staleTime: 24 * 60 * 60 * 1000,
    })
}

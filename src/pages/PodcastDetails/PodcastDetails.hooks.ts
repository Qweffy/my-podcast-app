import { useQuery } from '@tanstack/react-query'
import { MappedEpisode } from 'types/Podcast'
import { fetchPodcastEpisodes } from 'api/episodies.ts'

export const usePodcastDetails = (podcastId: string) => {
    return useQuery<MappedEpisode[]>({
        queryKey: ['podcastDetails', podcastId],
        queryFn: () => fetchPodcastEpisodes(podcastId),
        enabled: !!podcastId,
        staleTime: 24 * 60 * 60 * 1000,
    })
}

import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { fetchPodcasts } from 'api/podcasts'
import { MappedPodcast } from 'types/Podcasts.ts'

export const usePodcasts = (): UseQueryResult<MappedPodcast[], unknown> => {
    return useQuery<MappedPodcast[]>({
        queryKey: ['podcasts'],
        queryFn: fetchPodcasts,
        staleTime: 24 * 60 * 60 * 1000,
    })
}

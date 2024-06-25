import { useQuery } from '@tanstack/react-query'
import { fetchPodcasts } from 'api/podcasts.ts'

export const usePodcasts = () => {
    return useQuery({
        queryKey: ['podcasts'],
        queryFn: fetchPodcasts,
        staleTime: 24 * 60 * 60 * 1000,
    })
}

import { ReactNode } from 'react'
import { usePodcasts } from 'pages/Home/Home.hooks.ts'
import PodcastsContext from 'context/PodcastsContext.ts'
import { MappedPodcast } from 'types/Podcasts.ts'

export const PodcastsProvider = ({ children }: { children: ReactNode }) => {
    const { data, isLoading, error } = usePodcasts()
    const podcasts: MappedPodcast[] = data ?? []

    return (
        <PodcastsContext.Provider value={{ podcasts, isLoading, error }}>
            {children}
        </PodcastsContext.Provider>
    )
}

import { createContext, useContext } from 'react'
import { MappedPodcast } from 'types/Podcast.ts'

interface PodcastsContextProps {
    podcasts: MappedPodcast[]
    isLoading: boolean
    error: unknown
}

const PodcastsContext = createContext<PodcastsContextProps | undefined>(undefined)

export const usePodcastsContext = () => {
    const context = useContext(PodcastsContext)
    if (!context) {
        throw new Error('usePodcastsContext must be used within a PodcastsProvider')
    }
    return context
}

export default PodcastsContext

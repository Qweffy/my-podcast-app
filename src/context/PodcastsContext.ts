import { createContext, useContext } from 'react'
import { MappedPodcast } from 'types/Podcasts'

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

    const findPodcastById = (id: string): MappedPodcast | undefined => {
        return context.podcasts.find((podcast) => podcast.id === id)
    }

    return {
        ...context,
        findPodcastById,
    }
}

export default PodcastsContext

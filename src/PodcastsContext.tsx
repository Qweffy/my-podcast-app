import { createContext, useContext, ReactNode } from 'react'
import { usePodcasts } from 'pages/Home/Home.hooks'
import { Podcast } from 'types/Podcast'

interface PodcastsContextProps {
    podcasts: Podcast[]
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

export const PodcastsProvider = ({ children }: { children: ReactNode }) => {
    const { data, isLoading, error } = usePodcasts()
    const podcasts = data?.feed?.entry ?? []

    return (
        <PodcastsContext.Provider value={{ podcasts, isLoading, error }}>
            {children}
        </PodcastsContext.Provider>
    )
}

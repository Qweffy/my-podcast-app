import { useState } from 'react'
import PodcastFilter from 'components/PodcastFilter'
import { usePodcastsContext } from '../../PodcastsContext.tsx'
// import { usePodcasts } from './Home.hooks.ts'
import { filterPodcasts } from './Home.utils.ts'
import { PodcastList } from './Home.components.tsx'

export const Home = () => {
    const [filter, setFilter] = useState('')
    const { podcasts, isLoading, error } = usePodcastsContext()

    const filteredPodcasts = filterPodcasts(podcasts, filter)

    if (isLoading) return <div>Loading...</div>
    if (error) console.log('An error has occurred', error)

    return (
        <div className="flex flex-col gap-10 items-center py-10">
            <PodcastFilter filter={filter} setFilter={setFilter} />
            <PodcastList podcasts={filteredPodcasts} />
        </div>
    )
}

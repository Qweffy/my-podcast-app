import { useState } from 'react'
import PodcastFilter from 'components/PodcastFilter'
import { filterPodcasts } from './Home.utils.ts'
import { PodcastList } from 'components/PodcastList/PodcastList.tsx'
import { usePodcastsContext } from 'context/PodcastsContext.ts'
import Header from 'components/Header'

export const Home = () => {
    const [filter, setFilter] = useState('')
    const { podcasts, isLoading, error } = usePodcastsContext()
    const filteredPodcasts = filterPodcasts(podcasts, filter)
    console.log('loading', isLoading)
    if (error) console.error('An error has occurred', error)

    return (
        <div className="flex flex-col gap-10 items-center py-10">
            <Header isLoading={isLoading} />
            <PodcastFilter filter={filter} setFilter={setFilter} />
            <PodcastList podcasts={filteredPodcasts} />
        </div>
    )
}

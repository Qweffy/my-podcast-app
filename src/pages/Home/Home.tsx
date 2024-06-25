import { useState } from 'react'
import PodcastFilter from 'components/PodcastFilter'
import { usePodcasts } from 'pages/Home/Home.hooks.ts'
import { filterPodcasts } from 'pages/Home/Home.utils.ts'
import { PodcastList } from 'pages/Home/Home.components.tsx'

export const Home = () => {
    const [filter, setFilter] = useState('')
    const { data, isLoading, error } = usePodcasts()

    if (isLoading) return <div>Loading...</div>
    if (error) console.log('An error has occurred', error)

    const podcasts = data?.feed?.entry ?? []
    const filteredPodcasts = filterPodcasts(podcasts, filter)

    return (
        <div className="flex flex-col gap-10 items-center py-10">
            <PodcastFilter filter={filter} setFilter={setFilter} />
            <PodcastList podcasts={filteredPodcasts} />
        </div>
    )
}

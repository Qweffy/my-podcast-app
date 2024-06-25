import { useState } from 'react'
import PodcastFilter from 'components/PodcastFilter'
import { usePodcasts } from 'pages/Home/Home.hooks.ts'
import { PodcastList } from 'pages/Home/Home.components.tsx'

export const Home = () => {
    const [filter, setFilter] = useState('')
    const { data, isLoading, error } = usePodcasts()

    if (isLoading) return <div>Loading...</div>
    if (error) console.error('An error has occurred', error)

    const filteredPodcasts = Array.isArray(data)
        ? data.filter(
              (podcast) =>
                  podcast.title.toLowerCase().includes(filter.toLowerCase()) ||
                  podcast.author.toLowerCase().includes(filter.toLowerCase()),
          )
        : []

    return (
        <div className="flex flex-col gap-10 items-center py-10">
            <PodcastFilter filter={filter} setFilter={setFilter} />
            <PodcastList podcasts={filteredPodcasts} />
        </div>
    )
}

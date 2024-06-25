import PodcastCard from '../PodcastCard/PodcastCard'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PodcastFilter from '../PodcastFilter/PodcastFilter'
import { Podcast } from '../../types/podcast'
import { fetchPodcasts } from '../../api/podcasts'

const Home = () => {
    const [filter, setFilter] = useState('')
    const { data, isLoading, error } = useQuery({
        queryKey: ['podcasts'],
        queryFn: fetchPodcasts,
        staleTime: 24 * 60 * 60 * 1000,
    })

    const filteredPodcasts =
        data?.feed?.entry.filter(
            (podcast: Podcast) =>
                podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase()) ||
                podcast['im:artist'].label.toLowerCase().includes(filter.toLowerCase()),
        ) ?? []

    if (isLoading) return <div>Loading...</div>
    if (error) console.log('An error has occurred', error)

    return (
        <div className="flex flex-col gap-10 items-center py-10">
            <PodcastFilter filter={filter} setFilter={setFilter} />
            <section className="w-3/5 grid grid-cols-5 gap-6">
                {filteredPodcasts?.map((podcast: Podcast) => {
                    const podcastId = podcast.id.attributes['im:id']
                    const title = podcast['im:name'].label
                    const authorName = podcast['im:artist'].label
                    const imageURL = podcast['im:image'][2]?.label || ''

                    return (
                        <Link key={podcastId} to={`/podcast/${podcastId}`}>
                            <PodcastCard
                                id={podcastId}
                                title={title}
                                author={authorName}
                                imageURL={imageURL}
                            />
                        </Link>
                    )
                })}
            </section>
        </div>
    )
}

export default Home

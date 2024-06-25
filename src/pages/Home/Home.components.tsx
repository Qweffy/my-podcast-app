import PodcastCard from 'components/PodcastCard'
import { Link } from 'react-router-dom'
import { Podcast } from 'types/Podcast.ts'

interface PodcastListProps {
    podcasts: Podcast[]
}

export const PodcastList = ({ podcasts }: PodcastListProps) => {
    return (
        <section className="w-3/5 grid grid-cols-5 gap-6">
            {podcasts.map((podcast) => {
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
    )
}

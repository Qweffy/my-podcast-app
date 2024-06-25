import PodcastCard from 'components/PodcastCard'
import { Link } from 'react-router-dom'
import { MappedPodcast } from 'api/mappers.ts'

interface PodcastListProps {
    podcasts: MappedPodcast[]
}

export const PodcastList = ({ podcasts }: PodcastListProps) => {
    return (
        <section className="w-3/5 grid grid-cols-5 gap-6">
            {podcasts.map((podcast) => {
                const podcastId = podcast.id
                const title = podcast.title
                const authorName = podcast.author
                const imageURL = podcast.imageURL

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

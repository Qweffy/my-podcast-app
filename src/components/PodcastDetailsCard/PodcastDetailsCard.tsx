import { useParams, Link } from 'react-router-dom'
import { usePodcastsContext } from 'context/PodcastsContext.ts'

export const PodcastDetailsCard = () => {
    const { podcastId } = useParams<{ podcastId: string }>()
    const { findPodcastById } = usePodcastsContext()

    if (!podcastId) {
        return <p>Podcast ID is missing</p>
    }

    const podcast = findPodcastById(podcastId)
    const { imageURL, title, author, description } = podcast ?? {}

    return (
        <section className="flex flex-col rounded-md shadow-md min-h-[10rem] border border-1 max-w-[16rem] min-w-[16rem] px-3 pt-4 gap-3">
            <Link to={`/podcast/${podcastId}`}>
                <img
                    src={imageURL}
                    className="shadow mx-auto my-2 rounded-md"
                    alt={`${title} cover`}
                    width="150rem"
                />
            </Link>
            <div className="border-t-2 pt-3">
                <Link to={`/podcast/${podcastId}`}>
                    <h3 className="text-md font-semibold">{title}</h3>
                </Link>
                <Link to={`/podcast/${podcastId}`}>
                    <p className="text-sm">
                        <i>{author}</i>
                    </p>
                </Link>
            </div>
            <div className="border-t-2 py-3">
                <h3 className="text-sm font-semibold">Description:</h3>
                <p className="text-sm break-words">{description}</p>
            </div>
        </section>
    )
}

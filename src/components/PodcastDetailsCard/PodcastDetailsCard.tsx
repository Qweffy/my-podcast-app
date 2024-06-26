import { useParams } from 'react-router-dom'
import { usePodcastsContext } from 'context/PodcastsContext.ts'

export const PodcastDetailsCard = () => {
    const { podcastId } = useParams<string>()
    const { findPodcastById } = usePodcastsContext()
    const podcast = findPodcastById(podcastId)
    const { imageURL, title, author, description } = podcast ?? {}

    return (
        <section className="flex flex-col shadow-md min-h-[10rem] border border-1 max-w-[14rem] px-3 pt-4 gap-3">
            <img src={imageURL} className="shadow" alt={`${title} cover`} />
            <div className="border-t-2 py-3">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-sm">
                    <i>{author}</i>
                </p>
            </div>
            <div className="border-t-2 py-3">
                <h3 className="text-sm font-semibold">Description:</h3>
                <p className="text-sm">{description}</p>
            </div>
        </section>
    )
}

import { usePodcastsContext } from '../../PodcastsContext'
import { useParams } from 'react-router-dom'

export const PodcastDetailsCard = () => {
    const { podcastId } = useParams<string>()
    const { podcasts } = usePodcastsContext()

    const podcast = podcasts.find((p) => p.id.attributes['im:id'] === podcastId)
    console.log('PODCAST', podcast)

    const imageURL = podcast?.['im:image'][2].label
    const title = podcast?.['im:name'].label
    const author = podcast?.['im:artist'].label

    return (
        <section className="flex flex-col items-center shadow-md min-h-[10rem] border border-1 max-w-[14rem] px-3 pt-4 gap-3">
            <img src={imageURL} className="shadow"></img>
            <div className="border-t-2 py-3">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-sm">
                    <i>{author}</i>
                </p>
            </div>
            <div className="border-t-2 py-3">
                <h3 className="text-sm font-semibold">Description:</h3>
                <p className="text-sm">
                    A podcast where musicians take apart their songs, and piece by piece, tell the
                    story of how they were made.
                </p>
            </div>
        </section>
    )
}

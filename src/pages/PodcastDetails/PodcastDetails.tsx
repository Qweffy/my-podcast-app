import { useParams } from 'react-router-dom'
import PodcastDetailsCard from 'components/PodcastDetailsCard'
import EpisodesList from 'components/EpisodesList'
import { usePodcastDetails } from 'pages/PodcastDetails/PodcastDetails.hooks.ts'

export const PodcastDetails = () => {
    const { podcastId } = useParams<string>()

    const { data, isLoading, error } = usePodcastDetails(podcastId!)

    if (error) {
        console.error('An error occurred:', error)
        return <div>An error occurred</div>
    }

    return (
        <div className="flex flex-col w-full items-center py-10">
            <div className="flex gap-14 items-start">
                <PodcastDetailsCard />
                <EpisodesList episodes={data ?? []} isLoading={isLoading} />
            </div>
        </div>
    )
}

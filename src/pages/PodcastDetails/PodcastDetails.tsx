import { useParams } from 'react-router-dom'
import PodcastDetailsCard from 'components/PodcastDetailsCard'
import EpisodesList from 'components/EpisodesList'
import { usePodcastDetails } from 'pages/PodcastDetails/PodcastDetails.hooks.ts'
import Header from 'components/Header'

export const PodcastDetails = () => {
    const { podcastId } = useParams<string>()

    const { data, isLoading, error } = usePodcastDetails(podcastId!)
    if (error) {
        console.error('An error occurred:', error)
        return <div>An error occurred</div>
    }

    return (
        <>
            <Header isLoading={isLoading} />
            <div className="flex flex-col items-center py-10">
                <div className="flex gap-14 items-start justify-between w-3/5">
                    <PodcastDetailsCard />
                    <EpisodesList episodes={data ?? []} isLoading={isLoading} />
                </div>
            </div>
        </>
    )
}

import PodcastDetailsCard from 'components/PodcastDetailsCard'
import EpisodesList from 'components/EpisodesList'

export const PodcastDetails = () => {
    return (
        <div className="flex flex-col w-full items-center py-10">
            <div className="flex gap-14 items-start">
                <PodcastDetailsCard />
                <EpisodesList />
            </div>
        </div>
    )
}

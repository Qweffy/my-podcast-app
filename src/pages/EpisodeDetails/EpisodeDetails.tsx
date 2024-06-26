import EpisodeDetailsCard from 'components/EpisodeDetailsCard'
import Header from 'components/Header'
import PodcastDetailsCard from 'components/PodcastDetailsCard'

export const EpisodeDetails = () => {
    return (
        <>
            <Header isLoading={false} />
            <div className="flex flex-col w-full items-center py-10">
                <div className="flex gap-14 items-start">
                    <PodcastDetailsCard />
                    <EpisodeDetailsCard />
                </div>
            </div>
        </>
    )
}

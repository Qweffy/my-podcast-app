import EpisodeDetailsCard from 'components/EpisodeDetailsCard'
import PodcastDetailsCard from 'components/PodcastDetailsCard'
import { useLocation } from 'react-router-dom'

export const EpisodeDetails = () => {
    const location = useLocation()
    console.log('location', location)
    return (
        <div className="flex flex-col w-full items-center py-10">
            <div className="flex gap-14 items-start">
                <PodcastDetailsCard />
                <EpisodeDetailsCard />
            </div>
        </div>
    )
}

import { formatDate, formatDuration } from './EpisodesList.utils'
import { Link } from 'react-router-dom'
import { MappedEpisode } from 'types/Podcasts.ts'

interface EpisodesListProps {
    episodes: MappedEpisode[]
    isLoading: boolean
}

export const EpisodesList = ({ episodes, isLoading }: EpisodesListProps) => {
    console.log('episodesinEpisodesList', episodes)
    return (
        <section className="min-w-[48rem] max-w-[50rem] flex flex-col gap-5">
            <div className="shadow-md font-bold p-2 text-xl">Episodes: {episodes.length}</div>
            <div className="shadow-md p-4">
                <table className="table-fixed">
                    <thead className="w-full">
                        <tr className="border-b-2 font-semibold text-sm">
                            <th className="w-1/2 text-left py-2">Title</th>
                            <th className="w-2/12 text-center">Date</th>
                            <th className="w-1/12 text-center">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodes.slice(1).map((episode) => {
                            const { name, id, duration, releaseDate, description, audio } = episode
                            return (
                                <tr key={id} className="text-sm">
                                    <td className="text-cyan-600 py-2 border-b-2">
                                        <Link
                                            key={id}
                                            to={`episode/${id}`}
                                            state={{ id, description, name, audio }}>
                                            {name}
                                        </Link>
                                    </td>

                                    <td className="text-center py-2 border-b-2">
                                        {formatDate(releaseDate)}
                                    </td>
                                    <td className="text-center py-2 border-b-2">
                                        {formatDuration(duration)}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

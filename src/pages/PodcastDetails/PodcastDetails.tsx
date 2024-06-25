import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

interface Episode {
    trackId: number
    trackName: string
    releaseDate: string
    trackTimeMillis: number
}
interface PodcastDetailsApiResponse {
    resultCount: number
    results: Episode[]
}

const formatDuration = (millis: number): string => {
    const hours = Math.floor(millis / 3600000)
    const minutes = Math.floor((millis % 3600000) / 60000)
    const seconds = Math.floor((millis % 60000) / 1000)

    const formattedHours = hours > 0 ? `${hours}:` : ''
    const formattedMinutes = hours > 0 ? minutes.toString().padStart(2, '0') : minutes.toString()
    const formattedSeconds = seconds.toString().padStart(2, '0')

    return `${formattedHours}${formattedMinutes}:${formattedSeconds}`
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString().slice(-2)
    return `${day}/${month}/${year}`
}

const fetchPodcastEpisodes = async (podcastId: string) => {
    const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`,
    )
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    const parsedData = JSON.parse(data.contents) as PodcastDetailsApiResponse
    console.log('data', data)
    return parsedData
}

export const PodcastDetails = () => {
    const { podcastId } = useParams<string>()
    const { data, isLoading, error } = useQuery({
        queryKey: ['podcastDetails', podcastId],
        queryFn: () => fetchPodcastEpisodes(podcastId!),
        enabled: !!podcastId,
        staleTime: 24 * 60 * 60 * 1000,
    })

    if (isLoading) return <div>Loading...</div>
    if (error) console.log('An error occurred', error)
    return (
        <div className="flex flex-col w-full items-center py-10">
            <div className="flex gap-14 items-start">
                <section className="shadow-md min-h-[10rem] max-w-[14rem] px-3">
                    <img></img>
                    <div className="border-t-2 py-3">
                        <h3 className="text-sm font-semibold">Song Exploder</h3>
                        <p className="text-sm">by Song Exploder</p>
                    </div>
                    <div className="border-t-2 py-3">
                        <h3 className="text-sm font-semibold">Description:</h3>
                        <p className="text-sm">
                            A podcast where musicians take apart their songs, and piece by piece,
                            tell the story of how they were made.
                        </p>
                    </div>
                </section>
                <section className="min-w-[40rem] flex flex-col gap-5">
                    <div className="shadow-md font-bold p-2 text-xl">
                        Episodes: {data?.resultCount}
                    </div>
                    <div className="shadow-md p-3">
                        <table className="border w-full">
                            <thead className="">
                                <tr className="border-b-2 flex justify-between font-semibold text-sm">
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.results.map((episode) => {
                                    const { trackName, trackId, trackTimeMillis, releaseDate } =
                                        episode
                                    return (
                                        <tr key={trackId} className="text-sm">
                                            <td className="text-cyan-600">{trackName}</td>
                                            <td className="text-center">
                                                {formatDate(releaseDate)}
                                            </td>
                                            <td className="text-center">
                                                {formatDuration(trackTimeMillis)}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

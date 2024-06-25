import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

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

export const EpisodesList = () => {
    const { podcastId } = useParams<string>()

    const { data, isLoading, error } = useQuery({
        queryKey: ['podcastDetails', podcastId],
        queryFn: () => fetchPodcastEpisodes(podcastId!),
        enabled: !!podcastId,
        staleTime: 24 * 60 * 60 * 1000,
    })

    if (error) console.log('An error occurred', error)

    return (
        <section className="min-w-[45rem] flex flex-col gap-5">
            <div className="shadow-md font-bold p-2 text-xl">Episodes: {data?.resultCount}</div>
            <div className="shadow-md p-4">
                <table className="table-fixed">
                    <thead className="w-full">
                        <tr className="border-b-2 font-semibold text-sm ">
                            <th className="w-1/2 text-left py-2">Title</th>
                            <th className="w-2/12 text-center">Date</th>
                            <th className="w-1/12 text-center">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading
                            ? 'Loading'
                            : data?.results.map((episode) => {
                                  const { trackName, trackId, trackTimeMillis, releaseDate } =
                                      episode
                                  return (
                                      <tr key={trackId} className="text-sm">
                                          <td className="text-cyan-600 py-2 border-b-2">
                                              {trackName}
                                          </td>
                                          <td className="text-center py-2 border-b-2">
                                              {formatDate(releaseDate)}
                                          </td>
                                          <td className="text-center py-2 border-b-2">
                                              {formatDuration(trackTimeMillis)}
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

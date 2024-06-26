import { Episode, MappedEpisode, PodcastDetailsApiResponse } from 'types/Podcasts.ts'

const PODCAST_EPISODES_API_URL = 'https://api.allorigins.win/get?url='
const mapEpisode = (episode: Episode): MappedEpisode => ({
    id: episode.trackId,
    name: episode.trackName,
    releaseDate: episode.releaseDate,
    duration: episode.trackTimeMillis,
    description: episode.description,
    audio: episode.episodeUrl,
})

export const fetchPodcastEpisodes = async (podcastId: string): Promise<MappedEpisode[]> => {
    const url = `${PODCAST_EPISODES_API_URL}${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: { contents: string } = await response.json()
    const parsedData = JSON.parse(data.contents) as PodcastDetailsApiResponse
    return parsedData.results.map(mapEpisode)
}

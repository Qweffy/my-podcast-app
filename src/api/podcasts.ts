import { MappedPodcast, mapPodcast } from './mappers'
import { Podcast } from 'types/Podcast'

interface ApiResponse {
    feed: {
        entry: Podcast[]
    }
}

const PODCASTS_API_URL = process.env.PODCASTS_API_URL

if (!PODCASTS_API_URL) {
    throw new Error('PODCASTS_API_URL is not defined')
}

export const fetchPodcasts = async (): Promise<MappedPodcast[]> => {
    const response = await fetch(PODCASTS_API_URL)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    const data: ApiResponse = (await response.json()) as ApiResponse
    return data.feed.entry.map(mapPodcast)
}

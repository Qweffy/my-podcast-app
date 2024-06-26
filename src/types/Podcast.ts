export interface Podcast {
    id: {
        attributes: {
            'im:id': string
        }
    }
    'im:name': {
        label: string
    }
    'im:artist': {
        label: string
    }
    'im:image': {
        label: string
    }[]
}

export interface Episode {
    trackId: number
    trackName: string
    releaseDate: string
    trackTimeMillis: number
}

export interface PodcastDetailsApiResponse {
    resultCount: number
    results: Episode[]
}

export interface MappedPodcast {
    id: string
    title: string
    author: string
    imageURL: string
}

export interface MappedEpisode {
    id: number
    name: string
    releaseDate: string
    duration: number
}

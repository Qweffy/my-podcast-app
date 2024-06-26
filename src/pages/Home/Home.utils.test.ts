import { filterPodcasts } from 'pages/Home/Home.utils'
import { MappedPodcast } from 'types/Podcast'

describe('filterPodcasts', () => {
    it('should return podcasts that match the filter by name', () => {
        const podcasts: MappedPodcast[] = [
            {
                id: '1',
                title: 'Tech Talk',
                author: 'Tech Guru',
                imageURL: 'image1.jpg',
            },
            {
                id: '2',
                title: 'Health Tips',
                author: 'Health Expert',
                imageURL: 'image2.jpg',
            },
        ]
        const filter = 'Tech'
        const result = filterPodcasts(podcasts, filter)
        expect(result).toEqual([podcasts[0]])
    })

    it('should return multiple podcasts that match the filter', () => {
        const podcasts: MappedPodcast[] = [
            {
                id: '1',
                title: 'Tech Talk',
                author: 'Tech Guru',
                imageURL: 'image1.jpg',
            },
            {
                id: '2',
                title: 'Health Tips',
                author: 'Health Expert',
                imageURL: 'image2.jpg',
            },
            {
                id: '3',
                title: 'Tech News',
                author: 'Techie',
                imageURL: 'image3.jpg',
            },
        ]
        const filter = 'Tech'
        const result = filterPodcasts(podcasts, filter)
        expect(result).toEqual([podcasts[0], podcasts[2]])
    })
})

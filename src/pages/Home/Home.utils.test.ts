import { filterPodcasts } from 'pages/Home/Home.utils.ts'
import { Podcast } from 'types/Podcast.ts'

describe('filterPodcasts', () => {
    it('should return podcasts that match the filter by name', () => {
        const podcasts: Podcast[] = [
            {
                id: { attributes: { 'im:id': '1' } },
                'im:name': { label: 'Tech Talk' },
                'im:artist': { label: 'Tech Guru' },
                'im:image': [{ label: 'image1.jpg' }],
            },
            {
                id: { attributes: { 'im:id': '2' } },
                'im:name': { label: 'Health Tips' },
                'im:artist': { label: 'Health Expert' },
                'im:image': [{ label: 'image2.jpg' }],
            },
        ]
        const filter = 'Tech'
        const result = filterPodcasts(podcasts, filter)
        expect(result).toEqual([podcasts[0]])
    })

    it('should return multiple podcasts that match the filter', () => {
        const podcasts: Podcast[] = [
            {
                id: { attributes: { 'im:id': '1' } },
                'im:name': { label: 'Tech Talk' },
                'im:artist': { label: 'Tech Guru' },
                'im:image': [{ label: 'image1.jpg' }],
            },
            {
                id: { attributes: { 'im:id': '2' } },
                'im:name': { label: 'Health Tips' },
                'im:artist': { label: 'Health Expert' },
                'im:image': [{ label: 'image2.jpg' }],
            },
            {
                id: { attributes: { 'im:id': '3' } },
                'im:name': { label: 'Tech News' },
                'im:artist': { label: 'Techie' },
                'im:image': [{ label: 'image3.jpg' }],
            },
        ]
        const filter = 'Tech'
        const result = filterPodcasts(podcasts, filter)
        expect(result).toEqual([podcasts[0], podcasts[2]])
    })
})

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Podcast } from 'types/Podcast'
import { PodcastList } from 'pages/Home/Home.components.tsx'

describe('PodcastList', () => {
    it('should render a list of podcasts correctly when provided with valid data', () => {
        const podcasts: Podcast[] = [
            {
                id: { attributes: { 'im:id': '1' } },
                'im:name': { label: 'Podcast 1' },
                'im:artist': { label: 'Author 1' },
                // @ts-ignore
                'im:image': [{}, {}, { label: 'image1.jpg' }],
            },
            {
                id: { attributes: { 'im:id': '2' } },
                'im:name': { label: 'Podcast 2' },
                'im:artist': { label: 'Author 2' },
                // @ts-ignore
                'im:image': [{}, {}, { label: 'image2.jpg' }],
            },
        ]

        const { container } = render(
            <MemoryRouter>
                <PodcastList podcasts={podcasts} />
            </MemoryRouter>,
        )
        expect(container.querySelectorAll('a').length).toBe(2)
        expect(container.querySelectorAll('a')[0].getAttribute('href')).toBe('/podcast/1')
        expect(container.querySelectorAll('a')[1].getAttribute('href')).toBe('/podcast/2')
    })

    it('should handle an empty podcasts array without errors', () => {
        const podcasts: Podcast[] = []

        const { container } = render(
            <MemoryRouter>
                <PodcastList podcasts={podcasts} />
            </MemoryRouter>,
        )
        expect(container.querySelectorAll('a').length).toBe(0)
    })
})

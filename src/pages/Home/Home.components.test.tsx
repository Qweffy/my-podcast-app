import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { MappedPodcast } from 'api/mappers.ts'
import { PodcastList } from './Home.components.tsx'

describe('PodcastList', () => {
    it('should render a list of podcasts correctly when provided with valid data', () => {
        const podcasts: MappedPodcast[] = [
            {
                id: '1',
                title: 'Podcast 1',
                author: 'Author 1',
                imageURL: 'image1.jpg',
            },
            {
                id: '2',
                title: 'Podcast 2',
                author: 'Author 2',
                imageURL: 'image2.jpg',
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
        const podcasts: MappedPodcast[] = []

        const { container } = render(
            <MemoryRouter>
                <PodcastList podcasts={podcasts} />
            </MemoryRouter>,
        )
        expect(container.querySelectorAll('a').length).toBe(0)
    })
})

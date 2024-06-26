import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { Home } from './Home'
import { PodcastsProvider } from '../../PodcastsContext'

const usePodcastsMock = vi.fn()

vi.mock('./Home.hooks.ts', () => ({
    usePodcasts: () => usePodcastsMock(),
}))

describe('Home', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('should render loading state when data is being fetched', () => {
        usePodcastsMock.mockReturnValue({
            data: null,
            isLoading: true,
            error: null,
        })

        const { getByText } = render(
            <PodcastsProvider>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </PodcastsProvider>,
        )
        expect(getByText('Loading...')).toBeInTheDocument()
    })

    it('should handle null or undefined data gracefully', () => {
        usePodcastsMock.mockReturnValue({
            data: null,
            isLoading: false,
            error: null,
        })

        const { queryByText } = render(
            <PodcastsProvider>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </PodcastsProvider>,
        )
        expect(queryByText('Loading...')).not.toBeInTheDocument()
        expect(queryByText('An error has occurred')).not.toBeInTheDocument()
    })
})

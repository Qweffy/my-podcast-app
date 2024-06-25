import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

vi.mock('./Home.hooks.ts', () => {
    return {
        usePodcasts: vi.fn(),
    }
})

import { Home } from './Home'
import { usePodcasts } from 'pages/Home/Home.hooks.ts'

describe('Home', () => {
    it('should render loading state when data is being fetched', () => {
        ;(usePodcasts as jest.Mock).mockReturnValue({
            data: null,
            isLoading: true,
            error: null,
        })

        const { getByText } = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        )
        expect(getByText('Loading...')).toBeInTheDocument()
    })

    it('should handle null or undefined data gracefully', () => {
        ;(usePodcasts as jest.Mock).mockReturnValue({
            data: null,
            isLoading: false,
            error: null,
        })

        const { queryByText } = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        )
        expect(queryByText('Loading...')).not.toBeInTheDocument()
        expect(queryByText('An error has occurred')).not.toBeInTheDocument()
    })
})

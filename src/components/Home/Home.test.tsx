import '@testing-library/jest-dom'
import React from 'react'
import { beforeEach, afterEach, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './Home'
import { MemoryRouter } from 'react-router-dom'

const queryClient = new QueryClient()

const renderWithQueryClient = (ui: React.ReactElement) => {
    return render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>{ui}</MemoryRouter>
        </QueryClientProvider>,
    )
}

const mockPodcasts = {
    feed: {
        entry: [
            {
                id: { attributes: { 'im:id': '1' } },
                'im:name': { label: 'Podcast 1' },
                'im:artist': { label: 'Artist 1' },
                'im:image': [{}, {}, { label: 'http://example.com/image1.jpg' }],
            },
            {
                id: { attributes: { 'im:id': '2' } },
                'im:name': { label: 'Podcast 2' },
                'im:artist': { label: 'Artist 2' },
                'im:image': [{}, {}, { label: 'http://example.com/image2.jpg' }],
            },
        ],
    },
}

beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockPodcasts),
    } as unknown as Response)
})

afterEach(() => {
    vi.restoreAllMocks()
})

test('renders loading state initially', async () => {
    renderWithQueryClient(<Home />)
    await waitFor(() => {
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
})

test('renders podcasts and allows filtering', async () => {
    renderWithQueryClient(<Home />)
    await waitFor(
        async () => {
            expect(await screen.findByText('Podcast 1')).toBeInTheDocument()
        },
        { timeout: 5000 },
    )

    await waitFor(async () => expect(await screen.findByText('Podcast 2')).toBeInTheDocument())

    const input = screen.getByPlaceholderText('Filter podcasts...')
    fireEvent.change(input, { target: { value: 'Podcast 1' } })

    expect(await screen.findByText('Podcast 1')).toBeInTheDocument()
    expect(screen.queryByText('Podcast 2')).not.toBeInTheDocument()
})

test('handles fetch error', async () => {
    renderWithQueryClient(<Home />)

    await waitFor(() => {
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    expect(console.log).toHaveBeenCalledWith('An error has occurred', expect.any(Error))
})

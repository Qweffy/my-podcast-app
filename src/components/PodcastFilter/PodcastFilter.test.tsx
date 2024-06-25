import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import PodcastFilter from 'components/PodcastFilter/index.ts'

describe('PodcastFilter', () => {
    it('should render correctly with default props', () => {
        const { container } = render(<PodcastFilter filter="" setFilter={() => {}} />)
        expect(container).toMatchSnapshot()
    })

    it('should handle empty filter value gracefully', () => {
        const setFilter = vi.fn()
        const { getByPlaceholderText } = render(
            <PodcastFilter filter="Initial" setFilter={setFilter} />,
        )
        const input = getByPlaceholderText('Filter podcasts...')
        fireEvent.change(input, { target: { value: '' } })
        expect(setFilter).toHaveBeenCalledWith('')
    })

    it('should handle non-empty filter value', () => {
        const setFilter = vi.fn()
        const { getByPlaceholderText } = render(<PodcastFilter filter="" setFilter={setFilter} />)
        const input = getByPlaceholderText('Filter podcasts...')
        fireEvent.change(input, { target: { value: 'New Filter' } })
        expect(setFilter).toHaveBeenCalledWith('New Filter')
    })
})

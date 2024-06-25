import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import PodcastCard from 'components/PodcastCard/index.ts'

describe('PodcastCard', () => {
    it('should render correctly with valid title, author, and imageURL', () => {
        const { container, getByText } = render(
            <PodcastCard id={'1'} title="Test Podcast" author="Test Author" imageURL="test.jpg" />,
        )
        expect(container).toMatchSnapshot()
        expect(getByText('TEST PODCAST')).toBeInTheDocument()
        expect(getByText('Author: Test Author')).toBeInTheDocument()
    })

    it('should handle empty title gracefully', () => {
        const { getByText, getByAltText } = render(
            <PodcastCard id={'2'} title="" author="Test Author" imageURL="test.jpg" />,
        )
        expect(getByAltText('Podcast Image')).toBeInTheDocument()
        expect(getByText('Author: Test Author')).toBeInTheDocument()
    })
})

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60 * 24, // 24 horas
            gcTime: 1000 * 60 * 60 * 24, // 24 horas
        },
    },
})

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={'Home'} />
                    <Route path="/podcast/:podcastId" element={'Podcast'} />
                    <Route
                        path="/podcast/:podcastId/episode/:episodeId"
                        element={'PodcastEpisode'}
                    />
                </Routes>
            </Router>
        </QueryClientProvider>
    )
}

export default App

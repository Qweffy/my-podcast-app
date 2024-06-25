import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from 'pages/Home'

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/podcast/:podcastId" element={'Podcast'} />
                <Route path="/podcast/:podcastId/episode/:episodeId" element={'PodcastEpisode'} />
            </Routes>
        </Router>
    )
}

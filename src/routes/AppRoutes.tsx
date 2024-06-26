import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from 'pages/Home'
import PodcastDetails from 'pages/PodcastDetails'
import EpisodeDetails from 'pages/EpisodeDetails'

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
                <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetails />} />
            </Routes>
        </Router>
    )
}

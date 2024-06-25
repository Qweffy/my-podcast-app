import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '../components/Home/Home'
import PodcastDetails from '../components/PodcastDetails/PodcastDetails'

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
                <Route path="/podcast/:podcastId/episode/:episodeId" element={'PodcastEpisode'} />
            </Routes>
        </Router>
    )
}

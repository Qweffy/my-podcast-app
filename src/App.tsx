import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={'Home'} />
                <Route path="/podcast/:podcastId" element={'Podcast'} />
                <Route path="/podcast/:podcastId/episode/:episodeId" element={'PodcastEpisode'} />
            </Routes>
        </Router>
    )
}

export default App

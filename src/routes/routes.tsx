import React from 'react'
import { Routes, Route } from 'react-router-dom'

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={'Home'} />
            <Route path="/podcast/:podcastId" element={'Podcast'} />
            <Route path="/podcast/:podcastId/episode/:episodeId" element={'PodcastEpisode'} />
        </Routes>
    )
}

export default AppRoutes

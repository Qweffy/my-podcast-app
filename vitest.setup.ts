import '@testing-library/jest-dom'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.test' })

process.env.PODCASTS_API_URL =
    process.env.PODCASTS_API_URL ??
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

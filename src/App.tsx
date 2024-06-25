import './App.css'
import { PodcastsProvider } from './PodcastsContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './routes/AppRoutes.tsx'
import queryClient from './utils/QueryClient.ts'

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <PodcastsProvider>
                <AppRoutes />
            </PodcastsProvider>
        </QueryClientProvider>
    )
}

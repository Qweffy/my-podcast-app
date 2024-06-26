import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './routes/AppRoutes.tsx'
import queryClient from './utils/QueryClient.ts'
import { PodcastsProvider } from 'providers/PodcastsProvider.tsx'
export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <PodcastsProvider>
                <AppRoutes />
            </PodcastsProvider>
        </QueryClientProvider>
    )
}

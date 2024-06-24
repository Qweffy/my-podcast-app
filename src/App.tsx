import './App.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './routes/AppRoutes.tsx'
import queryClient from './utils/QueryClient.ts'

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppRoutes />
        </QueryClientProvider>
    )
}

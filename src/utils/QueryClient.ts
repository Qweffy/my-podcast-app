// src/config/queryClient.ts
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60 * 24, // 24 horas
            gcTime: 1000 * 60 * 60 * 24, // 24 horas
        },
    },
})

export default queryClient

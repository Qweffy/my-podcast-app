import { QueryClient, QueryKey, QueryState } from '@tanstack/react-query'
import {
    persistQueryClient,
    PersistedClient,
    Persister,
    PersistQueryClientOptions,
} from '@tanstack/react-query-persist-client'

interface CachedQuery {
    queryKey: QueryKey
    state: QueryState<unknown>
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 24 * 60 * 60 * 1000,
            gcTime: 24 * 60 * 60 * 1000,
        },
    },
})

const localStorageKey = 'REACT_QUERY_OFFLINE_CACHE'

const localStoragePersister: Persister = {
    persistClient: (client: PersistedClient) => {
        try {
            localStorage.setItem(localStorageKey, JSON.stringify(client))
        } catch (error) {
            console.error('Failed to persist client:', error)
        }
    },
    restoreClient: () => {
        try {
            const cache = localStorage.getItem(localStorageKey)
            if (cache) {
                return JSON.parse(cache) as PersistedClient
            }
        } catch (error) {
            console.error('Failed to restore client:', error)
        }
        return {
            clientState: { queries: [], mutations: [] },
            timestamp: Date.now(),
            buster: 'default-buster',
        } as PersistedClient
    },
    removeClient: () => {
        try {
            localStorage.removeItem(localStorageKey)
        } catch (error) {
            console.error('Failed to remove client:', error)
        }
    },
}

const persistOptions: PersistQueryClientOptions = {
    queryClient,
    persister: localStoragePersister,
    maxAge: 24 * 60 * 60 * 1000,
}

const restore = async (): Promise<void> => {
    const cache = await localStoragePersister.restoreClient()
    if (cache) {
        ;(cache.clientState.queries as unknown as CachedQuery[]).forEach((query) => {
            queryClient.setQueryData(query.queryKey, query.state.data)
        })
    }
}

const startPersisting = async () => {
    try {
        await restore()
        const persistPromise = persistQueryClient(persistOptions)
        if (persistPromise instanceof Promise) {
            await persistPromise
        }
    } catch (error) {
        console.error(error)
    }
}

await startPersisting()

export default queryClient

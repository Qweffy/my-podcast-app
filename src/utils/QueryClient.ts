import { QueryClient } from '@tanstack/react-query'
import {
    persistQueryClient,
    PersistedClient,
    Persister,
    PersistQueryClientOptions,
} from '@tanstack/react-query-persist-client'
import localforage from 'localforage'

interface CachedQuery {
    queryKey: readonly unknown[]
    state: {
        data: unknown
        [key: string]: unknown
    }
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 24 * 60 * 60 * 1000,
            gcTime: 24 * 60 * 60 * 1000,
        },
    },
})

const localStoragePersister: Persister = {
    persistClient: async (client: PersistedClient) => {
        await localforage.setItem('REACT_QUERY_OFFLINE_CACHE', client)
    },
    restoreClient: async () => {
        const cache = await localforage.getItem<PersistedClient>('REACT_QUERY_OFFLINE_CACHE')
        if (cache) {
            return cache
        }
        return {
            clientState: { queries: [], mutations: [] },
            timestamp: Date.now(),
            buster: 'default-buster',
        } as PersistedClient
    },
    removeClient: async () => {
        await localforage.removeItem('REACT_QUERY_OFFLINE_CACHE')
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

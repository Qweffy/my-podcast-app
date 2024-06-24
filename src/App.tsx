import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './routes/routes'
import queryClient from './utils/QueryClient'

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <AppRoutes />
            </Router>
        </QueryClientProvider>
    )
}

export default App

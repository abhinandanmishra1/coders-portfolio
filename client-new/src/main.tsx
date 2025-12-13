import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { LeetcodeProfilerProvider } from 'leetcode-profiler'
import App from './App.tsx'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Clerk Publishable Key')
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 1,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <QueryClientProvider client={queryClient}>
                <LeetcodeProfilerProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </LeetcodeProfilerProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ClerkProvider>
    </React.StrictMode>,
)

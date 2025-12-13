import { useAuth } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'
import Home from '../../pages/Home'

export default function HomeRoute() {
    const { isSignedIn, isLoaded } = useAuth()

    // Wait for auth to load
    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    // If signed in, redirect to admin dashboard
    if (isSignedIn) {
        return <Navigate to="/admin" replace />
    }

    // If not signed in, show landing page
    return <Home />
}

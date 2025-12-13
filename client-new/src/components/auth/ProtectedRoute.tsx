import { useAuth } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'

interface ProtectedRouteProps {
    children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isSignedIn, isLoaded } = useAuth()

    // Wait for auth to load
    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    // If not signed in, redirect to sign-in page
    if (!isSignedIn) {
        return <Navigate to="/sign-in" replace />
    }

    // If signed in, render the protected content
    return <>{children}</>
}

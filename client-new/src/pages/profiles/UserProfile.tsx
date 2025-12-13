import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const { username } = useParams<{ username: string }>()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">User Profile</h1>
            <p className="text-muted-foreground">User profile overview for @{username} coming soon...</p>
        </div>
    )
}

import { useParams } from 'react-router-dom'
import { useUserProfile } from '@/hooks/useUser'
import { useCodechefProfile } from '@/hooks/useCodechef'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Star, User } from 'lucide-react'

export default function CodechefProfile() {
    const { username } = useParams<{ username: string }>()

    // First, fetch user profile to get platform-specific username
    const { data: userProfile, isLoading: userLoading, error: userError } = useUserProfile(username || '')
    const codechefUsername = userProfile?.codechefUsername

    // Then fetch Codechef data using the platform-specific username
    const { data: profile, isLoading: profileLoading, error: profileError } = useCodechefProfile(codechefUsername)

    if (userLoading || profileLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (userError || profileError) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="border-destructive">
                    <CardHeader>
                        <CardTitle className="text-destructive">Error Loading Profile</CardTitle>
                        <CardDescription>
                            Could not load {userError ? 'user' : 'Codechef'} profile for {username}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    if (!codechefUsername) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="border-yellow-500">
                    <CardHeader>
                        <CardTitle className="text-yellow-600">No Codechef Username</CardTitle>
                        <CardDescription>
                            No Codechef username configured for {username}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Codechef Profile</h1>
                <p className="text-muted-foreground">@{username}</p>
            </div>

            <div className="grid gap-6">
                {/* Profile Card */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <CardTitle>{profile?.name || username}</CardTitle>
                                <CardDescription>
                                    {profile?.stars && (
                                        <span className="flex items-center gap-1">
                                            <Star className="h-4 w-4" />
                                            {profile.stars}
                                        </span>
                                    )}
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.currentRating || 'N/A'}</p>
                                <p className="text-sm text-muted-foreground">Current Rating</p>
                            </div>
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.highestRating || 'N/A'}</p>
                                <p className="text-sm text-muted-foreground">Highest Rating</p>
                            </div>
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.globalRank || 'N/A'}</p>
                                <p className="text-sm text-muted-foreground">Global Rank</p>
                            </div>
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.problemsSolved || 'N/A'}</p>
                                <p className="text-sm text-muted-foreground">Problems Solved</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

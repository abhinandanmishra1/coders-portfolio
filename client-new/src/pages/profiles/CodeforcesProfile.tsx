import { useParams } from 'react-router-dom'
import { useUserProfile } from '@/hooks/useUser'
import { useCodeforcesProfile, useCodeforcesRatingHistory } from '@/hooks/useCodeforces'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, TrendingUp, User } from 'lucide-react'

export default function CodeforcesProfile() {
    const { username } = useParams<{ username: string }>()

    // First, fetch user profile to get platform-specific username
    const { data: userProfile, isLoading: userLoading, error: userError } = useUserProfile(username || '')
    const codeforcesUsername = userProfile?.codeforcesUsername

    // Then fetch Codeforces data using the platform-specific username
    const { data: profile, isLoading: profileLoading, error: profileError } = useCodeforcesProfile(codeforcesUsername)
    const { data: ratingHistory, isLoading: ratingLoading } = useCodeforcesRatingHistory(codeforcesUsername)

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
                            Could not load {userError ? 'user' : 'Codeforces'} profile for {username}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    if (!codeforcesUsername) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="border-yellow-500">
                    <CardHeader>
                        <CardTitle className="text-yellow-600">No Codeforces Username</CardTitle>
                        <CardDescription>
                            No Codeforces username configured for {username}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Codeforces Profile</h1>
                <p className="text-muted-foreground">@{username}</p>
            </div>

            <div className="grid gap-6">
                {/* Profile Card */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                {profile?.avatar ? (
                                    <img src={profile.avatar} alt={username} className="h-16 w-16 rounded-full" />
                                ) : (
                                    <User className="h-8 w-8 text-primary" />
                                )}
                            </div>
                            <div>
                                <CardTitle>
                                    {profile?.firstName && profile?.lastName
                                        ? `${profile.firstName} ${profile.lastName}`
                                        : username}
                                </CardTitle>
                                <CardDescription>
                                    Rank: {profile?.rank || 'N/A'}
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.rating || 'N/A'}</p>
                                <p className="text-sm text-muted-foreground">Current Rating</p>
                            </div>
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.maxRating || 'N/A'}</p>
                                <p className="text-sm text-muted-foreground">Max Rating</p>
                            </div>
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.maxRank || 'N/A'}</p>
                                <p className="text-sm text-muted-foreground">Max Rank</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Rating History */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <CardTitle>Rating History</CardTitle>
                        </div>
                        <CardDescription>
                            Contest performance over time
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {ratingLoading ? (
                            <div className="flex justify-center py-8">
                                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                            </div>
                        ) : ratingHistory && ratingHistory.length > 0 ? (
                            <div className="space-y-3">
                                {ratingHistory.slice(0, 5).map((contest: any, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 rounded-lg border bg-card"
                                    >
                                        <div>
                                            <p className="font-medium">{contest.contestName}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Rank: {contest.rank}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className={`font-bold ${contest.newRating > contest.oldRating ? 'text-green-600' : 'text-red-600'}`}>
                                                {contest.newRating > contest.oldRating ? '+' : ''}{contest.newRating - contest.oldRating}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {contest.newRating}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted-foreground text-center py-8">
                                No rating history available
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

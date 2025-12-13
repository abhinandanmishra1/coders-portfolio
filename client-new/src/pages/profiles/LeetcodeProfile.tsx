import { useParams } from 'react-router-dom'
import { useUserProfile } from '@/hooks/useUser'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'
import {
    LeetcodeBadges,
    LeetcodeContestRatingGraph,
    LeetcodeSolvedProblemsStats,
    LeetcodeSubmissionsHeatmap,
    LeetcodeTopRatingHistogram,
} from 'leetcode-profiler'

export default function LeetcodeProfile() {
    const { username } = useParams<{ username: string }>()

    // First, fetch user profile to get platform-specific username
    const { data: userProfile, isLoading: userLoading, error: userError } = useUserProfile(username || '')
    const leetcodeUsername = userProfile?.leetcodeUsername

    if (userLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (userError) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="border-destructive">
                    <CardHeader>
                        <CardTitle className="text-destructive">Error Loading Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Could not load user profile for {username}
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (!leetcodeUsername) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="border-yellow-500">
                    <CardHeader>
                        <CardTitle className="text-yellow-600">No LeetCode Username</CardTitle>
                    </CardHeader>
                    <CardContent>
                        No LeetCode username configured for {username}
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">LeetCode Profile</h1>
                <p className="text-muted-foreground">@{leetcodeUsername}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Column - Graphs */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <div className="min-h-[250px] max-h-[350px]">
                        <LeetcodeContestRatingGraph username={leetcodeUsername} />
                    </div>

                    <div className="min-h-[250px] max-h-[350px]">
                        <LeetcodeTopRatingHistogram username={leetcodeUsername} />
                    </div>
                </div>

                {/* Right Column - Stats, Heatmap, Badges */}
                <div className="relative w-full lg:w-1/2 flex flex-col gap-6">
                    <LeetcodeSolvedProblemsStats username={leetcodeUsername} />
                    <LeetcodeSubmissionsHeatmap username={leetcodeUsername} />
                    <LeetcodeBadges username={leetcodeUsername} />
                </div>
            </div>
        </div>
    )
}

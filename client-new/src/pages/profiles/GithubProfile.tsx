import { useParams } from 'react-router-dom'
import { useUserProfile } from '@/hooks/useUser'
import { useGithubProfile, useGithubRepositories } from '@/hooks/useGithub'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, GitFork, Star, Code, User } from 'lucide-react'

export default function GithubProfile() {
    const { username } = useParams<{ username: string }>()

    // First, fetch user profile to get platform-specific username
    const { data: userProfile, isLoading: userLoading, error: userError } = useUserProfile(username || '')
    const githubUsername = userProfile?.githubUsername

    // Then fetch GitHub data using the platform-specific username
    const { data: profile, isLoading: profileLoading, error: profileError } = useGithubProfile(githubUsername)
    const { data: repositories, isLoading: reposLoading } = useGithubRepositories(githubUsername)

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
                            Could not load {userError ? 'user' : 'GitHub'} profile for {username}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    if (!githubUsername) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="border-yellow-500">
                    <CardHeader>
                        <CardTitle className="text-yellow-600">No GitHub Username</CardTitle>
                        <CardDescription>
                            No GitHub username configured for {username}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">GitHub Profile</h1>
                <p className="text-muted-foreground">@{username}</p>
            </div>

            <div className="grid gap-6">
                {/* Profile Card */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                                {profile?.avatar_url ? (
                                    <img src={profile.avatar_url} alt={username} className="h-16 w-16" />
                                ) : (
                                    <User className="h-8 w-8 text-primary" />
                                )}
                            </div>
                            <div>
                                <CardTitle>{profile?.name || username}</CardTitle>
                                <CardDescription>
                                    {profile?.bio || 'No bio available'}
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.public_repos || 0}</p>
                                <p className="text-sm text-muted-foreground">Repositories</p>
                            </div>
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.followers || 0}</p>
                                <p className="text-sm text-muted-foreground">Followers</p>
                            </div>
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.following || 0}</p>
                                <p className="text-sm text-muted-foreground">Following</p>
                            </div>
                            <div className="p-4 rounded-lg border bg-card">
                                <p className="text-2xl font-bold">{profile?.public_gists || 0}</p>
                                <p className="text-sm text-muted-foreground">Gists</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Top Repositories */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Code className="h-5 w-5 text-primary" />
                            <CardTitle>Top Repositories</CardTitle>
                        </div>
                        <CardDescription>
                            Most starred repositories
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {reposLoading ? (
                            <div className="flex justify-center py-8">
                                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                            </div>
                        ) : repositories && repositories.length > 0 ? (
                            <div className="space-y-3">
                                {repositories.slice(0, 5).map((repo: any) => (
                                    <a
                                        key={repo.id}
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <p className="font-medium text-primary hover:underline">
                                                    {repo.name}
                                                </p>
                                                {repo.description && (
                                                    <p className="text-sm text-muted-foreground mt-1">
                                                        {repo.description}
                                                    </p>
                                                )}
                                                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                                    {repo.language && (
                                                        <span className="flex items-center gap-1">
                                                            <div className="h-3 w-3 rounded-full bg-primary" />
                                                            {repo.language}
                                                        </span>
                                                    )}
                                                    <span className="flex items-center gap-1">
                                                        <Star className="h-3 w-3" />
                                                        {repo.stargazers_count}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <GitFork className="h-3 w-3" />
                                                        {repo.forks_count}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted-foreground text-center py-8">
                                No repositories found
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

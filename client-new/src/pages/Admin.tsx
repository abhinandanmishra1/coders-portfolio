import { useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { useCurrentUser, useUpdateUser } from '@/hooks/useUser'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Loader2, Save, User, Code, Briefcase, GraduationCap, FolderGit2 } from 'lucide-react'

export default function Admin() {
    const { user: clerkUser } = useUser()
    const { data: userProfile, isLoading } = useCurrentUser()
    const updateUser = useUpdateUser()

    const [activeTab, setActiveTab] = useState<'profile' | 'platforms' | 'experience' | 'education' | 'projects'>('profile')

    // Profile form state
    const [profileData, setProfileData] = useState({
        name: userProfile?.name || '',
        bio: userProfile?.bio || '',
        email: userProfile?.email || clerkUser?.primaryEmailAddress?.emailAddress || '',
        website: userProfile?.socialLinks?.website || '',
        github: userProfile?.socialLinks?.github || '',
        linkedin: userProfile?.socialLinks?.linkedin || '',
        twitter: userProfile?.socialLinks?.twitter || '',
    })

    // Platform usernames
    const [platformData, setPlatformData] = useState({
        hackerrank: userProfile?.platforms?.hackerrank || '',
        leetcode: userProfile?.platforms?.leetcode || '',
        codeforces: userProfile?.platforms?.codeforces || '',
        codechef: userProfile?.platforms?.codechef || '',
        github: userProfile?.platforms?.github || '',
    })

    const handleSaveProfile = async () => {
        await updateUser.mutateAsync({
            name: profileData.name,
            bio: profileData.bio,
            email: profileData.email,
            socialLinks: {
                website: profileData.website,
                github: profileData.github,
                linkedin: profileData.linkedin,
                twitter: profileData.twitter,
            },
        })
    }

    const handleSavePlatforms = async () => {
        await updateUser.mutateAsync({
            platforms: platformData,
        })
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'platforms', label: 'Platforms', icon: Code },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'projects', label: 'Projects', icon: FolderGit2 },
    ] as const

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-muted-foreground">
                    Manage your portfolio and coding profiles
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {tabs.map((tab) => (
                    <Button
                        key={tab.id}
                        variant={activeTab === tab.id ? 'default' : 'outline'}
                        onClick={() => setActiveTab(tab.id)}
                        className="flex items-center gap-2"
                    >
                        <tab.icon className="h-4 w-4" />
                        {tab.label}
                    </Button>
                ))}
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
                <Card>
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>
                            Update your personal details and social links
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    value={profileData.name}
                                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={profileData.email}
                                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <textarea
                                id="bio"
                                value={profileData.bio}
                                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                                placeholder="Tell us about yourself..."
                                className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold">Social Links</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="website">Website</Label>
                                    <Input
                                        id="website"
                                        value={profileData.website}
                                        onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                                        placeholder="https://yourwebsite.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="github">GitHub</Label>
                                    <Input
                                        id="github"
                                        value={profileData.github}
                                        onChange={(e) => setProfileData({ ...profileData, github: e.target.value })}
                                        placeholder="https://github.com/username"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="linkedin">LinkedIn</Label>
                                    <Input
                                        id="linkedin"
                                        value={profileData.linkedin}
                                        onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                                        placeholder="https://linkedin.com/in/username"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="twitter">Twitter</Label>
                                    <Input
                                        id="twitter"
                                        value={profileData.twitter}
                                        onChange={(e) => setProfileData({ ...profileData, twitter: e.target.value })}
                                        placeholder="https://twitter.com/username"
                                    />
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={handleSaveProfile}
                            disabled={updateUser.isPending}
                            className="w-full md:w-auto"
                        >
                            {updateUser.isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    Save Profile
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>
            )}

            {/* Platforms Tab */}
            {activeTab === 'platforms' && (
                <Card>
                    <CardHeader>
                        <CardTitle>Coding Platform Usernames</CardTitle>
                        <CardDescription>
                            Connect your coding profiles to showcase your achievements
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="hackerrank">HackerRank Username</Label>
                                <Input
                                    id="hackerrank"
                                    value={platformData.hackerrank}
                                    onChange={(e) => setPlatformData({ ...platformData, hackerrank: e.target.value })}
                                    placeholder="your_hackerrank_username"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="leetcode">LeetCode Username</Label>
                                <Input
                                    id="leetcode"
                                    value={platformData.leetcode}
                                    onChange={(e) => setPlatformData({ ...platformData, leetcode: e.target.value })}
                                    placeholder="your_leetcode_username"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="codeforces">Codeforces Handle</Label>
                                <Input
                                    id="codeforces"
                                    value={platformData.codeforces}
                                    onChange={(e) => setPlatformData({ ...platformData, codeforces: e.target.value })}
                                    placeholder="your_codeforces_handle"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="codechef">CodeChef Username</Label>
                                <Input
                                    id="codechef"
                                    value={platformData.codechef}
                                    onChange={(e) => setPlatformData({ ...platformData, codechef: e.target.value })}
                                    placeholder="your_codechef_username"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="github-platform">GitHub Username</Label>
                                <Input
                                    id="github-platform"
                                    value={platformData.github}
                                    onChange={(e) => setPlatformData({ ...platformData, github: e.target.value })}
                                    placeholder="your_github_username"
                                />
                            </div>
                        </div>

                        <Button
                            onClick={handleSavePlatforms}
                            disabled={updateUser.isPending}
                            className="w-full md:w-auto"
                        >
                            {updateUser.isPending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    Save Platforms
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
                <Card>
                    <CardHeader>
                        <CardTitle>Work Experience</CardTitle>
                        <CardDescription>
                            Add your professional experience
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Experience management coming soon...
                        </p>
                    </CardContent>
                </Card>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
                <Card>
                    <CardHeader>
                        <CardTitle>Education</CardTitle>
                        <CardDescription>
                            Add your educational background
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Education management coming soon...
                        </p>
                    </CardContent>
                </Card>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
                <Card>
                    <CardHeader>
                        <CardTitle>Projects</CardTitle>
                        <CardDescription>
                            Showcase your best projects
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Project management coming soon...
                        </p>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

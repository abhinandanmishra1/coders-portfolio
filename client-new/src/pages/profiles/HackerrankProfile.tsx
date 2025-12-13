import { useParams } from 'react-router-dom'
import { useUserProfile } from '@/hooks/useUser'
import {
    useHackerrankProfile,
    useHackerrankBadges,
    useHackerrankCertificates,
    useHackerrankExperiences,
    useHackerrankSchools
} from '@/hooks/useHackerrank'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Github, Linkedin, Globe, Hexagon } from 'lucide-react'
import "../../styles/profile.css"

export default function HackerrankProfile() {
    const { username } = useParams<{ username: string }>()

    // First, fetch user profile to get platform-specific username
    const { data: userProfile, isLoading: userLoading, error: userError } = useUserProfile(username || '')
    const hackerrankUsername = userProfile?.hackerrankUsername

    // Then fetch HackerRank data using the platform-specific username
    const { data: profile, isLoading: profileLoading, error: profileError } = useHackerrankProfile(hackerrankUsername)
    const { data: badges, isLoading: badgesLoading } = useHackerrankBadges(hackerrankUsername)
    const { data: certificates, isLoading: certificatesLoading } = useHackerrankCertificates(hackerrankUsername)
    const { data: experiences, isLoading: experiencesLoading } = useHackerrankExperiences(hackerrankUsername)
    const { data: schools, isLoading: schoolsLoading } = useHackerrankSchools(hackerrankUsername)

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
                    </CardHeader>
                    <CardContent>
                        Could not load {userError ? 'user' : 'HackerRank'} profile for {username}
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (!hackerrankUsername) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="border-yellow-500">
                    <CardHeader>
                        <CardTitle className="text-yellow-600">No HackerRank Username</CardTitle>
                    </CardHeader>
                    <CardContent>
                        No HackerRank username configured for {username}
                    </CardContent>
                </Card>
            </div>
        )
    }

    const profileData = profile?.model

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                {/* Left Sidebar - Profile Info */}
                <div className="lg:w-1/4 flex flex-col gap-6">
                    {/* Basic Info */}
                    <div className="flex flex-col gap-4">
                        {profileData?.avatar && (
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src={profileData.avatar}
                                    alt={profileData.name}
                                    className="w-32 h-32 rounded-lg object-cover"
                                />
                            </div>
                        )}

                        <h1 className="text-4xl font-bold text-foreground capitalize break-words leading-tight">
                            {profileData?.name || hackerrankUsername}
                        </h1>

                        <p className="text-xl text-muted-foreground">
                            @{profileData?.username || hackerrankUsername}
                        </p>

                        {profileData?.jobs_headline && (
                            <p className="text-base font-light text-foreground">
                                {profileData.jobs_headline}
                            </p>
                        )}

                        {profileData?.country && (
                            <p className="text-sm text-muted-foreground mb-4">
                                {profileData.country}
                            </p>
                        )}

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {profileData?.github_url && (
                                <a
                                    href={profileData.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-primary transition-colors"
                                    title="GitHub"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                            )}
                            {profileData?.linkedin_url && (
                                <a
                                    href={profileData.linkedin_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-primary transition-colors"
                                    title="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            )}
                            {profileData?.website && (
                                <a
                                    href={profileData.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-primary transition-colors"
                                    title="Website"
                                >
                                    <Globe className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="border-t pt-6 mt-2">
                        <h3 className="text-lg font-semibold mb-4">About</h3>

                        {profileData?.school && (
                            <div className="mb-4">
                                <h4 className="text-sm text-muted-foreground mb-1">Education</h4>
                                <p className="font-semibold">{profileData.school}</p>
                            </div>
                        )}

                        {profileData?.short_bio && (
                            <div>
                                <h4 className="text-sm text-muted-foreground mb-1">More about me</h4>
                                <p className="text-sm">{profileData.short_bio}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Content - Badges, Certificates, Experience, Education */}
                <div className="lg:w-3/5 flex flex-col gap-6">
                    {/* Badges */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Badges</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {badgesLoading ? (
                                <div className="flex justify-center py-8">
                                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                                </div>
                            ) : badges && badges.length > 0 ? (
                                <div className="flex flex-wrap">
                                    {badges.map((badge: any, index: number) => {
                                        const stars = badge.stars || 0
                                        return (
                                            <div
                                                key={index}
                                                className={`hr-badge hr-badge--${stars}star`}
                                            >
                                                <p className="hr-badge__title">
                                                    {badge.badge_short_name || badge.badge_name}
                                                </p>
                                                <div className="hr-badge__stars">
                                                    {[...Array(stars)].map((_, i) => (
                                                        <div key={i} className="hr-badge__star"></div>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-center py-8">
                                    No badges found
                                </p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Certificates */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Certificates</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {certificatesLoading ? (
                                <div className="flex justify-center py-8">
                                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                                </div>
                            ) : certificates && certificates.length > 0 ? (
                                <div className="flex flex-wrap">
                                    {certificates.map((cert: any, index: number) => {
                                        const attrs = cert.attributes || cert
                                        const certData = attrs.certificate || attrs
                                        const title = certData.label || attrs.certificates?.[0] || cert.name || cert.title
                                        const level = certData.level || ''
                                        const url = attrs.certificate_image || cert.certificate_url || '#'

                                        return (
                                            <a
                                                key={index}
                                                className="hr-certificate"
                                                href={url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <div className="hr-certificate__container">
                                                    <div className="hr-certificate--folded-corner"></div>
                                                    <div className="hr-certificate__content">
                                                        <h2 className="hr-certificate__heading">
                                                            {title} {level && `(${level})`}
                                                        </h2>
                                                        <span className="hr-certificate__verified">
                                                            <strong>Verified</strong>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-center py-4">
                                    {profileData?.username} has no certificates.
                                </p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Work Experience */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Work Experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {experiencesLoading ? (
                                <div className="flex justify-center py-8">
                                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                                </div>
                            ) : experiences && experiences.length > 0 ? (
                                <div className="space-y-6">
                                    {experiences.map((exp: any, index: number) => {
                                        const attrs = exp.attributes || exp
                                        return (
                                            <div key={index} className="flex gap-4">
                                                <div className="flex-shrink-0 mt-1">
                                                    <Hexagon className="h-5 w-5 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold">
                                                        {attrs.job_title || attrs.title || attrs.company}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mt-1">
                                                        {attrs.name || attrs.company}
                                                        {(attrs.start_month || attrs.start_year) && (
                                                            <span className="ml-2">
                                                                | {attrs.start_month && `${attrs.start_month}/`}{attrs.start_year} - {' '}
                                                                {attrs.end_month && attrs.end_year
                                                                    ? `${attrs.end_month}/${attrs.end_year}`
                                                                    : 'Present'
                                                                }
                                                            </span>
                                                        )}
                                                    </p>
                                                    {attrs.description && (
                                                        <p className="text-sm mt-2 text-foreground/80">
                                                            {attrs.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-center py-4">
                                    {profileData?.username} has not updated employment details yet.
                                </p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Education */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Education</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {schoolsLoading ? (
                                <div className="flex justify-center py-8">
                                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                                </div>
                            ) : schools && schools.length > 0 ? (
                                <div className="space-y-6">
                                    {schools.map((school: any, index: number) => {
                                        const attrs = school.attributes || school
                                        return (
                                            <div key={index} className="flex gap-4">
                                                <div className="flex-shrink-0 mt-1">
                                                    <Hexagon className="h-5 w-5 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold">
                                                        {attrs.name || attrs.school}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mt-1">
                                                        {attrs.program && `${attrs.program}, `}
                                                        {attrs.degree}
                                                        {(attrs.start_month || attrs.start_year) && (
                                                            <span className="ml-2">
                                                                | {attrs.start_month && `${attrs.start_month}/`}{attrs.start_year} - {' '}
                                                                {attrs.end_month && attrs.end_year
                                                                    ? `${attrs.end_month}/${attrs.end_year}`
                                                                    : 'Present'
                                                                }
                                                            </span>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-center py-4">
                                    {profileData?.username} has not updated Education details yet.
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

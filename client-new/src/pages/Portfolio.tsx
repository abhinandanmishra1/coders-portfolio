import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useUserProfile } from '@/hooks/useUser'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    User,
    Briefcase,
    Code,
    Mail,
    Download,
    ArrowRight,
    Linkedin,
    Twitter,
    Github,
    Instagram,
    Globe,
    Phone,
    MapPin,
    Loader2
} from 'lucide-react'

export default function Portfolio() {
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('about');

    const { data: profile, isLoading, error } = useUserProfile(username || '');

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (error || !profile) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="border-destructive">
                    <CardHeader>
                        <CardTitle className="text-destructive">Error Loading Portfolio</CardTitle>
                        <CardDescription>
                            Could not load portfolio for {username}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        )
    }

    const {
        fullName,
        designation,
        email,
        phone,
        address,
        country,
        about,
        resumeUrl,
        linkedinUrl,
        twitterUrl,
        githubUrl,
        instagramUrl,
        projects = [],
    } = profile;

    const navigateToCodingProfile = (platform: string) => {
        navigate(`/${username}/profile/${platform.toLowerCase()}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-primary/5 animate-float"
                        style={{
                            width: `${Math.random() * 100 + 20}px`,
                            height: `${Math.random() * 100 + 20}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Profile Header Card */}
                    <Card className="mb-8 backdrop-blur-sm bg-card/80">
                        <CardContent className="pt-6">
                            <div className="text-center space-y-4">
                                <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                                    <User className="h-12 w-12 text-primary-foreground" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold mb-2">{fullName || 'User Name'}</h1>
                                    <p className="text-xl text-muted-foreground">{designation || 'Designation'}</p>
                                </div>

                                {/* Social Links */}
                                <div className="flex justify-center gap-4">
                                    {linkedinUrl && (
                                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon">
                                                <Linkedin className="h-5 w-5" />
                                            </Button>
                                        </a>
                                    )}
                                    {twitterUrl && (
                                        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon">
                                                <Twitter className="h-5 w-5" />
                                            </Button>
                                        </a>
                                    )}
                                    {githubUrl && (
                                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon">
                                                <Github className="h-5 w-5" />
                                            </Button>
                                        </a>
                                    )}
                                    {instagramUrl && (
                                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon">
                                                <Instagram className="h-5 w-5" />
                                            </Button>
                                        </a>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-center gap-4">
                                    {resumeUrl && (
                                        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                                            <Button>
                                                <Download className="mr-2 h-4 w-4" />
                                                Download CV
                                            </Button>
                                        </a>
                                    )}
                                    {email && (
                                        <a href={`mailto:${email}`}>
                                            <Button variant="outline">
                                                <Mail className="mr-2 h-4 w-4" />
                                                Contact Me
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tabs Section */}
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-4 mb-8">
                            <TabsTrigger value="about" className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                About
                            </TabsTrigger>
                            <TabsTrigger value="projects" className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4" />
                                Projects
                            </TabsTrigger>
                            <TabsTrigger value="coding" className="flex items-center gap-2">
                                <Code className="h-4 w-4" />
                                Coding
                            </TabsTrigger>
                            <TabsTrigger value="contact" className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                Contact
                            </TabsTrigger>
                        </TabsList>

                        {/* About Tab */}
                        <TabsContent value="about">
                            <Card className="backdrop-blur-sm bg-card/80">
                                <CardHeader>
                                    <CardTitle className="text-3xl">About Me</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="text-lg">
                                        <p className="mb-4">
                                            Hi, I'm <span className="font-bold text-primary">{fullName || 'User Name'}</span>
                                            {country && <> from <span className="font-bold text-primary">{country}</span></>}
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {about || 'Please add a valuable description about yourself to attract recruiters'}
                                        </p>
                                    </div>
                                    {linkedinUrl && (
                                        <Button
                                            onClick={() => window.open(linkedinUrl, '_blank')}
                                            className="mt-4"
                                        >
                                            Hire Me
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Projects Tab */}
                        <TabsContent value="projects">
                            <div className="grid gap-6 md:grid-cols-2">
                                {projects.length > 0 ? (
                                    projects.map((project: any, index: number) => (
                                        <Card key={index} className="backdrop-blur-sm bg-card/80 hover:shadow-lg transition-shadow">
                                            <CardHeader>
                                                <CardTitle>{project.name}</CardTitle>
                                                <CardDescription>{project.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.skills?.split(',').map((skill: string, idx: number) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                                        >
                                                            {skill.trim()}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex gap-2">
                                                    {project.githubLink && (
                                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                            <Button variant="outline" size="sm">
                                                                <Github className="mr-2 h-4 w-4" />
                                                                GitHub
                                                            </Button>
                                                        </a>
                                                    )}
                                                    {project.websiteLink && (
                                                        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                                                            <Button variant="outline" size="sm">
                                                                <Globe className="mr-2 h-4 w-4" />
                                                                Website
                                                            </Button>
                                                        </a>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))
                                ) : (
                                    <Card className="col-span-2">
                                        <CardContent className="py-8 text-center text-muted-foreground">
                                            No projects added yet
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        </TabsContent>

                        {/* Coding Profiles Tab */}
                        <TabsContent value="coding">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {['LeetCode', 'GitHub', 'CodeChef', 'Codeforces', 'HackerRank'].map((platform) => (
                                    <Card
                                        key={platform}
                                        className="backdrop-blur-sm bg-card/80 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
                                        onClick={() => navigateToCodingProfile(platform)}
                                    >
                                        <CardContent className="flex items-center justify-center p-8">
                                            <div className="text-center">
                                                <Code className="h-12 w-12 mx-auto mb-2 text-primary" />
                                                <h3 className="text-xl font-semibold">{platform}</h3>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Contact Tab */}
                        <TabsContent value="contact">
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Contact Form */}
                                <Card className="backdrop-blur-sm bg-card/80">
                                    <CardHeader>
                                        <CardTitle>Send a Message</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <form className="space-y-4">
                                            <div>
                                                <Label htmlFor="name">Name</Label>
                                                <Input id="name" placeholder="Your name" />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" type="email" placeholder="your@email.com" />
                                            </div>
                                            <div>
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea id="message" placeholder="Your message..." rows={5} />
                                            </div>
                                            <Button type="submit" className="w-full">Send Message</Button>
                                        </form>
                                    </CardContent>
                                </Card>

                                {/* Contact Information */}
                                <Card className="backdrop-blur-sm bg-card/80">
                                    <CardHeader>
                                        <CardTitle>Contact Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {email && (
                                            <div className="flex items-start gap-3">
                                                <Mail className="h-5 w-5 text-primary mt-0.5" />
                                                <div>
                                                    <p className="font-medium">Email</p>
                                                    <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary">
                                                        {email}
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                        {phone && (
                                            <div className="flex items-start gap-3">
                                                <Phone className="h-5 w-5 text-primary mt-0.5" />
                                                <div>
                                                    <p className="font-medium">Phone</p>
                                                    <a href={`tel:${phone}`} className="text-muted-foreground hover:text-primary">
                                                        {phone}
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                        {address && (
                                            <div className="flex items-start gap-3">
                                                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                                <div>
                                                    <p className="font-medium">Address</p>
                                                    <p className="text-muted-foreground">{address}</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="pt-4 border-t">
                                            <p className="font-medium mb-3">Social Media</p>
                                            <div className="flex gap-2">
                                                {linkedinUrl && (
                                                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                                                        <Button variant="outline" size="icon">
                                                            <Linkedin className="h-5 w-5" />
                                                        </Button>
                                                    </a>
                                                )}
                                                {twitterUrl && (
                                                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                                                        <Button variant="outline" size="icon">
                                                            <Twitter className="h-5 w-5" />
                                                        </Button>
                                                    </a>
                                                )}
                                                {instagramUrl && (
                                                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                                                        <Button variant="outline" size="icon">
                                                            <Instagram className="h-5 w-5" />
                                                        </Button>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

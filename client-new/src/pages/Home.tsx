import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Code2, Github, Award, TrendingUp, Zap } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Platform for{" "}
                            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                                &lt;coders /&gt;
                            </span>{" "}
                            to showcase their{" "}
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                coding experience
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            This application integrates with leading coding platforms such as
                            GitHub, LeetCode, Codechef, Codeforces, and Hackerrank to fetch your data
                            and create a stunning page that showcases your achievements across all these platforms.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <div className="flex-1 sm:w-64 relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                                        portfolio.app/
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="yourUsername"
                                        className="w-full pl-32 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                                    />
                                </div>
                            </div>
                            <Link to="/sign-up">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Create Portfolio
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Integrate All Your Coding Platforms
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Connect your profiles from multiple platforms and showcase them in one beautiful portfolio
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: Github, name: 'GitHub', desc: 'Contributions, repos, and activity' },
                            { icon: Code2, name: 'LeetCode', desc: 'Problems solved and contest ratings' },
                            { icon: Award, name: 'Codeforces', desc: 'Rating, rank, and contest history' },
                            { icon: TrendingUp, name: 'Codechef', desc: 'Stars, ratings, and achievements' },
                            { icon: Zap, name: 'Hackerrank', desc: 'Badges, skills, and certifications' },
                        ].map((platform) => (
                            <div
                                key={platform.name}
                                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                            >
                                <platform.icon className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                                <p className="text-muted-foreground">{platform.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            How It Works
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Get started in three simple steps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { step: '1', title: 'Sign Up', desc: 'Create your account in seconds' },
                            { step: '2', title: 'Connect Platforms', desc: 'Link your coding profiles' },
                            { step: '3', title: 'Share Portfolio', desc: 'Get a beautiful shareable link' },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Showcase Your Skills?
                    </h2>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                        Join thousands of developers who are already showcasing their coding journey
                    </p>
                    <Link to="/sign-up">
                        <Button size="lg" variant="secondary">
                            Get Started Free
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

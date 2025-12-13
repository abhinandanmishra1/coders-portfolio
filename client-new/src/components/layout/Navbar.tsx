import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Code2, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <Code2 className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl">Coders Portfolio</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <SignedIn>
                            <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors">
                                Admin
                            </Link>
                        </SignedIn>

                        <SignedOut>
                            <Link to="/sign-in">
                                <Button variant="ghost" size="sm">Sign In</Button>
                            </Link>
                            <Link to="/sign-up">
                                <Button size="sm">Get Started</Button>
                            </Link>
                        </SignedOut>

                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        <Link
                            to="/"
                            className="block text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <SignedIn>
                            <Link
                                to="/admin"
                                className="block text-sm font-medium hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Admin
                            </Link>
                        </SignedIn>

                        <SignedOut>
                            <div className="flex flex-col space-y-2">
                                <Link to="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                                    <Button variant="ghost" size="sm" className="w-full">Sign In</Button>
                                </Link>
                                <Link to="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                                    <Button size="sm" className="w-full">Get Started</Button>
                                </Link>
                            </div>
                        </SignedOut>

                        <SignedIn>
                            <div className="pt-2">
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </SignedIn>
                    </div>
                )}
            </div>
        </nav>
    )
}

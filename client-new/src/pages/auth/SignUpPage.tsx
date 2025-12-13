import { useState, FormEvent } from 'react'
import { useSignUp } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { AlertCircle, Loader2, Code2, CheckCircle2, Mail } from 'lucide-react'

export default function SignUpPage() {
    const { isLoaded, signUp, setActive } = useSignUp()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [verificationCode, setVerificationCode] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [pendingVerification, setPendingVerification] = useState(false)

    // Password strength indicator
    const getPasswordStrength = (pwd: string) => {
        if (pwd.length === 0) return { strength: 0, label: '', color: '' }
        if (pwd.length < 6) return { strength: 1, label: 'Weak', color: 'bg-red-500' }
        if (pwd.length < 10) return { strength: 2, label: 'Fair', color: 'bg-yellow-500' }
        if (pwd.length < 14) return { strength: 3, label: 'Good', color: 'bg-blue-500' }
        return { strength: 4, label: 'Strong', color: 'bg-green-500' }
    }

    const passwordStrength = getPasswordStrength(password)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!isLoaded) return

        setError('')
        setIsLoading(true)

        try {
            await signUp.create({
                emailAddress: email,
                password,
                username,
            })

            // Send email verification code
            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            setPendingVerification(true)
        } catch (err: any) {
            console.error('Sign up error:', err)
            setError(err.errors?.[0]?.message || 'Failed to create account. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleVerification = async (e: FormEvent) => {
        e.preventDefault()

        if (!isLoaded) return

        setError('')
        setIsLoading(true)

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code: verificationCode,
            })

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId })
                navigate('/')
            } else {
                console.log('Verification incomplete:', completeSignUp)
            }
        } catch (err: any) {
            console.error('Verification error:', err)
            setError(err.errors?.[0]?.message || 'Invalid verification code. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="w-full max-w-md">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-3xl font-bold">
                        <Code2 className="h-8 w-8 text-primary" />
                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            &lt;coders /&gt;
                        </span>
                    </Link>
                    <p className="text-muted-foreground mt-2">
                        {pendingVerification ? 'Verify your email' : 'Create your coding portfolio'}
                    </p>
                </div>

                <Card>
                    {!pendingVerification ? (
                        <>
                            <CardHeader>
                                <CardTitle>Sign Up</CardTitle>
                                <CardDescription>
                                    Create an account to start building your portfolio
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {error && (
                                        <div className="flex items-start gap-2 p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                                            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <p>{error}</p>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <Label htmlFor="username">Username</Label>
                                        <Input
                                            id="username"
                                            type="text"
                                            placeholder="johndoe"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            disabled={isLoading}
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            This will be your portfolio URL: portfolio.app/{username || 'username'}
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            disabled={isLoading}
                                            minLength={8}
                                        />
                                        {password && (
                                            <div className="space-y-1">
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4].map((level) => (
                                                        <div
                                                            key={level}
                                                            className={`h-1 flex-1 rounded-full transition-colors ${level <= passwordStrength.strength
                                                                    ? passwordStrength.color
                                                                    : 'bg-muted'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    Password strength: {passwordStrength.label}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isLoading || !isLoaded}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Creating account...
                                            </>
                                        ) : (
                                            'Create Account'
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </>
                    ) : (
                        <>
                            <CardHeader>
                                <div className="flex justify-center mb-4">
                                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Mail className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <CardTitle className="text-center">Check your email</CardTitle>
                                <CardDescription className="text-center">
                                    We've sent a verification code to <strong>{email}</strong>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleVerification} className="space-y-4">
                                    {error && (
                                        <div className="flex items-start gap-2 p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                                            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                            <p>{error}</p>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <Label htmlFor="code">Verification Code</Label>
                                        <Input
                                            id="code"
                                            type="text"
                                            placeholder="Enter 6-digit code"
                                            value={verificationCode}
                                            onChange={(e) => setVerificationCode(e.target.value)}
                                            required
                                            disabled={isLoading}
                                            maxLength={6}
                                            className="text-center text-2xl tracking-widest"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isLoading || !isLoaded || verificationCode.length !== 6}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Verifying...
                                            </>
                                        ) : (
                                            <>
                                                <CheckCircle2 className="mr-2 h-4 w-4" />
                                                Verify Email
                                            </>
                                        )}
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="ghost"
                                        className="w-full"
                                        onClick={() => setPendingVerification(false)}
                                        disabled={isLoading}
                                    >
                                        Back to sign up
                                    </Button>
                                </form>
                            </CardContent>
                        </>
                    )}
                    <CardFooter className="flex flex-col space-y-4">
                        <div className="text-sm text-center text-muted-foreground">
                            Already have an account?{' '}
                            <Link to="/sign-in" className="text-primary font-medium hover:underline">
                                Sign in
                            </Link>
                        </div>
                    </CardFooter>
                </Card>

                <p className="text-center text-sm text-muted-foreground mt-6">
                    By signing up, you agree to our{' '}
                    <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </p>
            </div>
        </div>
    )
}

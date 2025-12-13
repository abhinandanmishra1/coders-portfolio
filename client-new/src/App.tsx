import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Layout from './components/layout/Layout'
import HomeRoute from './components/auth/HomeRoute'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Admin from './pages/Admin'
import Portfolio from './pages/Portfolio'
import UserProfile from './pages/profiles/UserProfile'
import HackerrankProfile from './pages/profiles/HackerrankProfile'
import LeetcodeProfile from './pages/profiles/LeetcodeProfile'
import CodeforcesProfile from './pages/profiles/CodeforcesProfile'
import CodechefProfile from './pages/profiles/CodechefProfile'
import GithubProfile from './pages/profiles/GithubProfile'
import NotFound from './pages/NotFound'

function App() {
    return (
        <Routes>
            {/* Auth routes - outside of Layout */}
            <Route path="/sign-in/*" element={
                <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                    <SignIn routing="path" path="/sign-in" afterSignInUrl="/admin" />
                </div>
            } />
            <Route path="/sign-up/*" element={
                <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                    <SignUp routing="path" path="/sign-up" afterSignUpUrl="/admin" />
                </div>
            } />

            {/* Main app routes - inside Layout */}
            <Route path="/" element={<Layout />}>
                {/* Home route - shows landing page if not signed in, redirects to admin if signed in */}
                <Route index element={<HomeRoute />} />

                {/* Protected admin route */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                />

                {/* Public portfolio routes */}
                <Route path="/:username/portfolio" element={<Portfolio />} />
                <Route path="/:username/profile">
                    <Route index element={<UserProfile />} />
                    <Route path="hackerrank" element={<HackerrankProfile />} />
                    <Route path="leetcode" element={<LeetcodeProfile />} />
                    <Route path="codeforces" element={<CodeforcesProfile />} />
                    <Route path="codechef" element={<CodechefProfile />} />
                    <Route path="github" element={<GithubProfile />} />
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App

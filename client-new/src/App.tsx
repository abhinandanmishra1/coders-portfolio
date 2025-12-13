import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, SignedIn } from '@clerk/clerk-react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
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
            <Route path="/sign-in/*" element={
                <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                    <SignIn routing="path" path="/sign-in" />
                </div>
            } />
            <Route path="/sign-up/*" element={
                <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                    <SignUp routing="path" path="/sign-up" />
                </div>
            } />
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route
                    path="/admin"
                    element={
                        <SignedIn>
                            <Admin />
                        </SignedIn>
                    }
                />

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

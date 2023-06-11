import { Route, Routes } from 'react-router-dom';

import Home from "pages/Home";
import About from "pages/About";
import UserProfile from 'pages/UserProfile';
import HackerrankProfile from 'pages/UserProfile/Hackerrank';
import LeetcodeProfile from 'pages/UserProfile/Leetcode';
import CodeforcesProfile from 'pages/UserProfile/Codeforces';
import CodechefProfile from 'pages/UserProfile/Codechef';
import GithubProfile from 'pages/UserProfile/Github';
import ViewProfile from 'pages/ViewProfile';
import Auth from 'pages/Auth';
import UnknownComponent from 'pages/UnknownComponent';
import Profile from 'pages/Auth/Profile';
import Portfolio from 'pages/Portfolio';
import UserPage from 'pages/Auth/UserPage';
import './App.css';
// anubhav // anubhavanubhav

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/dashboard' element={<Profile />} />
                <Route path='/dashboard-new' element={<UserPage />} />
                <Route path='/auth'>
                    <Route path='signup' element={<Auth type="Signup" />} />
                    <Route path='login' element={<Auth type="Login" />} />
                </Route>

                <Route path='/:username/portfolio' element={<Portfolio />} />

                <Route path='/:username/profile'>
                    <Route path='' element={<UserProfile />} />
                    <Route path='hackerrank' element={<HackerrankProfile />} />
                    <Route path='leetcode' element={<LeetcodeProfile />} />
                    <Route path='codeforces' element={<CodeforcesProfile />} />
                    <Route path='codechef' element={<CodechefProfile />} />
                    <Route path='github' element={<GithubProfile />} />
                </Route>

                <Route path='viewProfile' element={<ViewProfile />} />

                <Route path='*' element={<UnknownComponent />} />
            </Routes>
        </>
    )
}

export default App
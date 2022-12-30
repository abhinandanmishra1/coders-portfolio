import { Route, Routes } from 'react-router-dom'; 

import Home from "components/Home";
import About from "components/About";
import UserProfile from 'components/UserProfile';
import HackerrankProfile from 'components/UserProfile/Hackerrank';
import LeetcodeProfile from 'components/UserProfile/Leetcode';
import CodeforcesProfile from 'components/UserProfile/Codeforces';
import CodechefProfile from 'components/UserProfile/Codechef';
import GithubProfile from 'components/UserProfile/Github';
import ViewProfile from 'components/ViewProfile';
import Auth from 'components/Auth';
import UnknownComponent from 'components/UnknownComponent';
import Profile from 'components/Auth/Profile';
import Portfolio from 'components/Portfolio';

function App(){
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/dashboard' element={<Profile />}/>
            <Route path='/auth'>
                <Route path='signup' element={<Auth type="Signup"/>}/>
                <Route path='login' element={<Auth type="Login"/>}/>
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
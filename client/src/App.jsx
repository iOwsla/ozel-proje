import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '~/pages/Home';
import About from '~/pages/about';
import Profile from '~/pages/Profile';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

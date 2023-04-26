import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
// import AuthPage from './pages/AuthPage';
import SignupPage from './pages/SignupPage';
import BlogPage from './pages/BlogPage';
import CommunitiesPage from './pages/CommunitiesPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Resources from './pages/ResourcesPage';
import LoginPage from './pages/LoginPage';
import useUser from './hooks/User'; 

function App() {
  const { user, isLoading } = useUser();
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={user ? <AboutPage /> : <LoginPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route path="/blog" element={user ? <BlogPage /> : <LoginPage />} />
            <Route path="/communities" element={user ? <CommunitiesPage /> : <LoginPage />} />
            <Route path="/resources" element={user ? <Resources /> : <LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
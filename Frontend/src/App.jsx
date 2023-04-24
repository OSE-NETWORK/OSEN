import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import BlogPage from './pages/BlogPage';
import CommunitiesPage from './pages/CommunitiesPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Resources from './pages/ResourcesPage';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/communities" element={<CommunitiesPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
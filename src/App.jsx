import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Studio from './pages/Studio'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:slug" element={<ProjectDetail />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import ViewBlogs from './components/ViewBlogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/" element={<ViewBlogs />} />
      </Routes>
    </Router>
  );
}

export default App;

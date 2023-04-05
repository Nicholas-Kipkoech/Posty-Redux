import "./App.css";
import Navbar from "./components/posts/Navbar";
import Post from "./components/posts/Post";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PostDetail } from "./components/posts/PostDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Post />} />
          <Route path="/:id" exact element={<PostDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

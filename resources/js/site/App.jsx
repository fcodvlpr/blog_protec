import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Result from './pages/Result';
import DetailsBlog from "./pages/DetailsBlog";
import NotFound from "./pages/NotFound";
import NewPost from "./pages/NewPost";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:term" element={<Result />} />
        <Route path="/details/:id/:name" element={<DetailsBlog />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

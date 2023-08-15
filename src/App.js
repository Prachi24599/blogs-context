import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    //fetch the initial blogposts data
    fetchBlogPosts();
  }, []);

  return (
    // <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    //   <Header />
    //   <Blogs />
    //   <Pagination />
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}

import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs Tagged <span>${category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};
export default CategoryPage;

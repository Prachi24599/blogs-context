import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigation } from "react-router";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const TagPage = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const tag = location.pathname("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs Tagged <span>${tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;

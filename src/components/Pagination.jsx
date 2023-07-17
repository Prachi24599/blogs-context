import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, fetchBlogPosts, totalPages } = useContext(AppContext);

  return (
    <div>
      <div>
        {page > 1 && (
          <button onClick={() => fetchBlogPosts(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => fetchBlogPosts(page + 1)}>Next</button>
        )}
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;

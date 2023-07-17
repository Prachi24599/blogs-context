import { createContext, useState } from "react";

//Step 1 : Create Context
export const AppContext = createContext();

//Step 2 : Create Provider
function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

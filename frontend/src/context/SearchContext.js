import React, { createContext, useState } from "react";

// Tạo context
export const SearchContext = createContext();

// SearchProvider để cung cấp giá trị cho toàn bộ ứng dụng
export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

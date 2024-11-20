import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext"; // Đảm bảo đường dẫn đúng
import "../assets/css/SearchResults.css"; // CSS cho trang kết quả tìm kiếm

const SearchResults = () => {
  const { searchResults } = useContext(SearchContext);

  // Kiểm tra nếu không có kết quả
  if (!searchResults || searchResults.length === 0) {
    return <div>No results found. Please try another search.</div>;
  }

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <h3>{result.name}</h3>
            <p>Location: {result.location}</p>
            <p>Price: ${result.price}</p>
            <p>Available Rooms: {result.availableRooms}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

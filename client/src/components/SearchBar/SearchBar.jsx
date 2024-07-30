import s from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const SearchBar = ({ onChange }) => {
  const [query, setQuery] = useState("");

  const handleInputSearch = async e => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onChange(newQuery);
  };
  const handleSearch = e => {
    onChange(query);
  };
  return (
    <>
      <label className={s.search_bar}>
        <span>
          <IoIosSearch />
        </span>
        <input
          className={s.search_input}
          value={query}
          onChange={handleInputSearch}
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
          placeholder="Search or start new Chat"
        />
      </label>
    </>
  );
};

export default SearchBar;

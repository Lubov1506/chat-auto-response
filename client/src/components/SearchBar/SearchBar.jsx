import s from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

import { createChat, searchChats } from "../../api/chatApi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (query.trim() === "") return;
    try {
      const searchResults = await searchChats(query);
      console.log(searchResults);
      setResults(searchResults);
    } catch (error) {
      console.error("Error searching chats:", error);
    }
  };

  const handleCreateChat = async () => {
    if (query.trim() === "") return;

    try {
      setIsCreating(true);
      const newChat = await createChat(query);
      setResults(prevResults => [...prevResults, newChat]);
      setQuery("");
    } catch (error) {
      console.error("Error creating chat:", error);
    } finally {
      setIsCreating(false);
    }
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
          onChange={handleInputChange}
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search or start new Chat"
        />
      </label>
      <button onClick={handleCreateChat} disabled={isCreating}>
        {isCreating ? "Creating..." : "Create Chat"}
      </button>
    </>
  );
};

export default SearchBar;

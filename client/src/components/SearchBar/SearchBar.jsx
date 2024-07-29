import s from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
const SearchBar = () => {
  return (
    <label className={s.search_bar}>
      <span>
        <IoIosSearch />
      </span>
      <input
        className={s.search_input}
        placeholder="Search or start new Chat"
      />
    </label>
  );
};
export default SearchBar;

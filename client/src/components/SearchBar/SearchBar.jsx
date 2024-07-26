import s from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <input className={s.search_input} placeholder="Search or start new Chat" />
  );
};
export default SearchBar;

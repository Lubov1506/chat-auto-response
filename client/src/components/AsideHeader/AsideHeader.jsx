import SearchBar from "../SearchBar/SearchBar";
import UserLogo from "../UserLogo/UserLogo";
import s from "./AsideHeader.module.css";
const AsideHeader = () => {
  return (
    <header className={s.header}>
      <div>
        <UserLogo />
        <button>Log in</button>
      </div>
      <SearchBar />
    </header>
  );
};
export default AsideHeader;

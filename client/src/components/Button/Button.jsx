import s from "./Button.module.css";
const Button = ({ children, onClick }) => {
  return (
    <button className={s.custom_btn} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;

import s from "./UserLogo.module.css";
import userDefImg from "../../assets/user.png";

const UserLogo = ({ userImage = userDefImg }) => {
  return (
    <div className={s.img_wrapper}>
      <img src={userImage} alt="User" width="30" height="30" />
    </div>
  );
};
export default UserLogo;

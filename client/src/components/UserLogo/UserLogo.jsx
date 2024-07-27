import s from "./UserLogo.module.css";
import userDefImg from "../../assets/user.png";

const UserLogo = ({
  userImage = userDefImg,
  alt = "User",
  width = "30",
  height = "30",
}) => {
  return (
    <div className={s.img_wrapper}>
      <img src={userImage} alt={alt} width={width} height={height} />
    </div>
  );
};
export default UserLogo;

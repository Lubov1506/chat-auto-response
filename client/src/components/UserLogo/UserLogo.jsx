import s from "./UserLogo.module.css";
import userDefImg from "../../assets/user.png";
import clsx from "clsx";
const UserLogo = ({
  userImage = userDefImg,
  alt = "User",
  width = "30",
  height = "30",
  status = true,
}) => {
  return (
    <div className={clsx(s.img_wrapper, { [s.active]: status })}>
      <img src={userImage} alt={alt} width={width} height={height} />
    </div>
  );
};
export default UserLogo;

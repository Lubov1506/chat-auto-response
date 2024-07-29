import Button from "../Button/Button";
import s from "./ConfirmModal.module.css";
const ConfirmModal = ({ onSubmit, onClose }) => {
  return (
    <div className={s.confirm_modal}>
      <Button onClick={onSubmit}>Yes</Button>
      <Button onClick={onClose}>No</Button>
    </div>
  );
};
export default ConfirmModal;

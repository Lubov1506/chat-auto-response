import { useState } from "react";
import Button from "../Button/Button";
import s from "./ChatModal.module.css";
const ChatModal = ({ onSubmit, data, type = "create" }) => {
  const [firstName, setFirstName] = useState(data ? data.firstName : "");
  const [lastName, setLastName] = useState(data ? data.lastName : "");
  const [error, setError] = useState("");
  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
    setError("");
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
    setError("");
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      setError("Both fields are required");
      return;
    }
    if ((type = "edit")) {
      onSubmit({ firstName, lastName });
    } else {
      onSubmit({ firstName, lastName });
    }
    setFirstName("");
    setLastName("");
  };
  return (
    <form onSubmit={handleSubmit} className={s.create_form}>
      <input
        placeholder="FirstName"
        value={firstName}
        onChange={handleFirstNameChange}
        required
      />
      <input
        placeholder="LastName"
        value={lastName}
        onChange={handleLastNameChange}
        required
      />
      <Button type="submit">{type === "create" ? "Create" : "Save"}</Button>
    </form>
  );
};
export default ChatModal;

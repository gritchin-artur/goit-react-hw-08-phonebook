import authOperations from "redux/auth/auth-operations";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLogInHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }))
      .unwrap()
      .then(() => navigate("/contacts"), toast.success(`You are enter ✅`))
      .catch((error) => toast.error("Please try again 🤔"));
    setEmail("");
    setPassword("");
  };

  return { handleChange, handleSubmit, email, password };
};

export default useLogInHook;

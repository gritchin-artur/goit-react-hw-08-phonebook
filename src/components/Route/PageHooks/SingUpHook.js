import authOperations from "components/redux/auth/auth-operations";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useSingUpHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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

    dispatch(authOperations.register({ name, email, password }))
      .unwrap()
      .then(() => navigate("/login"), toast.success("Greated ✅"))
      .catch((error) => toast.error("Please try again"));
    setName("");
    setEmail("");
    setPassword("");
  };
  return { handleSubmit, handleChange, name, email, password };
};

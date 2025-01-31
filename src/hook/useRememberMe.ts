import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export function useRememberMe() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = Cookies.get("savedEmail");
    const savedPassword = Cookies.get("savedPassword");

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const saveCredentials = () => {
    if (rememberMe) {
      Cookies.set("savedEmail", email, { expires: 10 });
      Cookies.set("savedPassword", password, { expires: 10 });
    } else {
      Cookies.remove("savedEmail");
      Cookies.remove("savedPassword");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    saveCredentials,
  };
}

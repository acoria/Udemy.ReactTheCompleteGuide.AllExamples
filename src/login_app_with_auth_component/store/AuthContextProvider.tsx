import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const isUserLoggedIn = () => localStorage.getItem(IS_LOGGED_IN) === "true";
  const IS_LOGGED_IN = "isLoggedIn";
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());
  const onLoginHandler = () => {
    localStorage.setItem(IS_LOGGED_IN, "true");
    setIsLoggedIn(true);
  };

  const onLogoutHandler = () => {
    localStorage.setItem(IS_LOGGED_IN, "false");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: onLoginHandler,
        logoutHandler: onLogoutHandler,
      }}
    >
      {props.children}
      <>{console.log(isLoggedIn)}</>
    </AuthContext.Provider>
  );
};

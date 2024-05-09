import Cookies from "js-cookie";

export const getSessionToken = () => {
  return Cookies.get("token");
};

export const setSessionToken = (token) => {
  Cookies.set("token", token, { expires: 7 });
};

export const removeSessionToken = () => {
  Cookies.remove("token");
};

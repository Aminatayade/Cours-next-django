import { getSessionToken } from "./cookie";
import { useState, useEffect } from "react";

export const useSession = () => {
  const token = getSessionToken();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(token);

  useEffect(() => {
    if (token) {
      setUser(token);
      setLoading(false);
    }
  }, [token]);

  return {user, loading};
};

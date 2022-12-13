import { useCallback, useEffect, useState } from "react";
const storageName = "userData";

export const useAuth = () => {
  const [token, setToket] = useState<string | null>(null);
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState<string | null>(null);

  const login = useCallback((jwtToken: string, id: string) => {
    setToket(jwtToken);
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToket(null);
    setUserId(null);

    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem(storageName) || '{}') ;

    if (data && data.token) {
      login(data.token, data.userId);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready };
};

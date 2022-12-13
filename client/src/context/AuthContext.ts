import { createContext } from "react";

const noop = () => {};

interface AppContextInterface {
    token: string | null;
    userId: string | null;
    login: (jwtToken: string, id: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
  }

export const AuthContext = createContext<AppContextInterface>({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})